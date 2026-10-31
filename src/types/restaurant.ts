export type MenuCourse = 
  | 'all'
  | 'soups'
  | 'starters'
  | 'dimsum'
  | 'seafood'
  | 'noodles'
  | 'rice'
  | 'desserts'
  | 'beverages';

export type FoodType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  course: MenuCourse;
  foodType: FoodType;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  spicyLevel?: 0 | 1 | 2 | 3; // 0 = mild, 1 = medium, 2 = spicy, 3 = extra spicy
  isChefSpecial?: boolean;
  isPopular?: boolean;
  portionSize?: string;
  isAvailable?: boolean;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
  spiceLevelPreference?: string;
  itemTotalPrice: number;
}

export interface ReservationRequest {
  id: string;
  requestId: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  guestsCount: number;
  date: string;
  timeSlot: string; // e.g. "Lunch 1:00 PM" or "Dinner 8:00 PM"
  seatingPreference: 'main_hall' | 'family_round_table' | 'quiet_booth' | 'window_view';
  specialRequests?: string;
  status: 'pending_review' | 'confirmed_by_staff' | 'waitlisted' | 'cancelled';
  createdAt: string;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  createdAt: string;
  orderType: 'takeaway' | 'delivery' | 'dine_in_table';
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  deliveryAddress?: string;
  tableNumber?: string;
  items: CartItem[];
  subtotal: number;
  gst: number;
  packagingFee: number;
  deliveryFee: number;
  total: number;
  status: 'received' | 'kitchen_preparing' | 'ready_for_pickup' | 'completed';
  notes?: string;
}
