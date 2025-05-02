
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PropertyType } from '@/types/property';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Define zod schema for the form
const propertySchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters' }),
  price: z.coerce.number().positive({ message: 'Price must be a positive number' }),
  type: z.enum(['apartment', 'house', 'condo', 'townhouse', 'land', 'commercial']),
  status: z.enum(['for-sale', 'for-rent', 'sold', 'pending']),
  bedrooms: z.coerce.number().int().min(0),
  bathrooms: z.coerce.number().min(0),
  size: z.coerce.number().positive({ message: 'Size must be a positive number' }),
  yearBuilt: z.coerce.number().int().min(1800).max(new Date().getFullYear()),
  features: z.string().transform(val => val.split(',').map(item => item.trim()).filter(Boolean)),
  address: z.string().min(5),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

type FormValues = z.infer<typeof propertySchema>;

interface PropertyFormProps {
  property?: PropertyType;
  onSubmit: (property: PropertyType) => void;
}

export const PropertyForm = ({ property, onSubmit }: PropertyFormProps) => {
  const isEditing = !!property;

  // Initialize form with default values or the property being edited
  const form = useForm<FormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: property?.title || '',
      description: property?.description || '',
      price: property?.price || 0,
      type: (property?.type as 'apartment' | 'house' | 'condo' | 'townhouse' | 'land' | 'commercial') || 'apartment',
      status: (property?.status as 'for-sale' | 'for-rent' | 'sold' | 'pending') || 'for-sale',
      bedrooms: property?.bedrooms || 0,
      bathrooms: property?.bathrooms || 0,
      size: property?.size || 0,
      yearBuilt: property?.yearBuilt || new Date().getFullYear(),
      features: property?.features ? property.features.join(', ') : '',
      address: property?.location?.address || '',
      city: property?.location?.city || '',
      state: property?.location?.state || '',
      zipCode: property?.location?.zipCode || '',
      country: property?.location?.country || '',
    },
  });

  const handleSubmit = (data: FormValues) => {
    // Transform form data into a PropertyType object
    const newProperty: PropertyType = {
      id: property?.id || `property-${Date.now()}`,
      title: data.title,
      description: data.description,
      price: data.price,
      type: data.type,
      status: data.status,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      size: data.size,
      yearBuilt: data.yearBuilt,
      features: data.features,
      images: property?.images || ["/placeholder.svg"],
      location: {
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country,
        coordinates: property?.location?.coordinates || { lat: 0, lng: 0 },
      },
      createdAt: property?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      agent: property?.agent || {
        id: "agent1",
        name: "John Smith",
        phone: "555-123-4567",
        email: "john@estatex.com",
        avatar: "/placeholder.svg"
      },
    };

    onSubmit(newProperty);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Property title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="for-sale">For Sale</SelectItem>
                    <SelectItem value="for-rent">For Rent</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" step="0.5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size (sq ft)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearBuilt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year Built</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="2023" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Features (comma separated)</FormLabel>
                <FormControl>
                  <Input placeholder="Balcony, Parking, Air Conditioning" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Detailed description of the property" 
                    className="resize-none h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-2">
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State/Province</FormLabel>
                    <FormControl>
                      <Input placeholder="State/Province" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip/Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Zip/Postal Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="submit">{isEditing ? 'Update Property' : 'Add Property'}</Button>
        </div>
      </form>
    </Form>
  );
};
