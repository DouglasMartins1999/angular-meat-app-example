import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewComponent } from './restaurant-detail/review/review.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sobre.htm',
        component: AboutComponent
    },
    {
        path: 'restaurants',
        component: RestaurantsComponent
    },
    {
        path: 'restaurants/:id',
        component: RestaurantDetailComponent,
        children: [
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'
            },
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'review',
                component: ReviewComponent
            }
        ]
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'order-summary',
        component: OrderSummaryComponent
    }
]