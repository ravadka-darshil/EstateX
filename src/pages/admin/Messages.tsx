
import { useState } from 'react';
import { Search, User, MessageSquare, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  subject: string;
  content: string;
  createdAt: string;
  read: boolean;
  important: boolean;
}

// Sample data - in a real app, this would come from an API
const sampleMessages: Message[] = [
  {
    id: "1",
    sender: {
      id: "user1",
      name: "John Smith",
      email: "john@example.com",
      avatar: ""
    },
    subject: "Interest in Modern Apartment",
    content: "Hello, I am interested in the modern apartment in the city center. Is it still available for viewing this weekend?",
    createdAt: "2023-05-10T09:30:00Z",
    read: false,
    important: true
  },
  {
    id: "2",
    sender: {
      id: "user2",
      name: "Emily Wilson",
      email: "emily@example.com",
      avatar: ""
    },
    subject: "Price Negotiation",
    content: "Hi there, I've seen the suburban family home and I'm interested in making an offer. However, I was wondering if there's any room for price negotiation?",
    createdAt: "2023-05-09T14:15:00Z",
    read: true,
    important: false
  },
  {
    id: "3",
    sender: {
      id: "user3",
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: ""
    },
    subject: "Property Inquiry",
    content: "I'd like to know more about the features and amenities of the beachfront villa. Does it come with a private pool?",
    createdAt: "2023-05-08T11:45:00Z",
    read: true,
    important: false
  },
  {
    id: "4",
    sender: {
      id: "user4",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: ""
    },
    subject: "Viewing Request",
    content: "I'm interested in viewing the downtown loft apartment. Would next Tuesday at 3 PM be possible?",
    createdAt: "2023-05-07T16:20:00Z",
    read: false,
    important: true
  }
];

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyContent, setReplyContent] = useState("");
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const filteredMessages = messages.filter(
    message => message.sender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
               message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMessageClick = (message: Message) => {
    // Mark as read when clicked
    if (!message.read) {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, read: true } : m
      ));
    }
    setSelectedMessage(message);
  };

  const toggleImportant = (id: string) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, important: !message.important } : message
    ));
  };

  const handleSendReply = () => {
    if (!replyContent.trim() || !selectedMessage) return;
    
    // In a real app, this would send the reply to an API
    toast({
      title: "Reply sent",
      description: "Your reply has been sent successfully.",
    });
    
    // Reset reply field
    setReplyContent("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-gray-500">Manage inquiries and messages from users</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardHeader className="pb-3">
            <CardTitle>Inbox</CardTitle>
            <div className="flex items-center mt-2">
              <Search className="h-4 w-4 mr-2 opacity-50" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-3 rounded-md cursor-pointer border ${
                      selectedMessage?.id === message.id
                        ? "bg-muted border-primary"
                        : message.read 
                          ? "bg-background hover:bg-muted/50" 
                          : "bg-muted/30 hover:bg-muted/50 border-muted-foreground/20"
                    }`}
                    onClick={() => handleMessageClick(message)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.sender.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {message.sender.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className={`text-sm ${!message.read ? 'font-medium' : ''}`}>
                            {message.sender.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{message.sender.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleImportant(message.id);
                          }}
                        >
                          <Star
                            className={`h-4 w-4 ${
                              message.important ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                            }`}
                          />
                        </Button>
                        {!message.read && (
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    </div>
                    <p className={`text-sm truncate mb-1 ${!message.read ? 'font-medium' : ''}`}>
                      {message.subject}
                    </p>
                    <p className="text-xs text-muted-foreground truncate mb-2">
                      {message.content.substring(0, 60)}...
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{formatDate(message.createdAt)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-4 text-center text-muted-foreground">
                  No messages found.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>
              {selectedMessage ? selectedMessage.subject : "Select a message"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={selectedMessage.sender.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {selectedMessage.sender.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedMessage.sender.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedMessage.sender.email}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(selectedMessage.createdAt)}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="whitespace-pre-line">{selectedMessage.content}</p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium mb-2">Reply</h3>
                  <Textarea
                    placeholder="Type your reply here..."
                    className="min-h-[120px] mb-3"
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button onClick={handleSendReply} disabled={!replyContent.trim()}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Reply
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-lg font-medium">No message selected</p>
                <p className="text-sm text-muted-foreground">
                  Select a message from the inbox to view its contents.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminMessages;
