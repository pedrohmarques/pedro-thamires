import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/header/components/navigation/navigation.component';
import { GenericBoxComponent } from './components/generic-box/generic-box.component';
import { InformationComponent } from './components/information/information.component';
import { ProductListComponent } from './components/product-list/product-list.component';



import { LayoutModule } from '@angular/cdk/layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

NavigationComponent

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GenericBoxComponent,
    InformationComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    LayoutModule,
    MatRadioModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatRippleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule    
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    LayoutModule,
    MatRadioModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatRippleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule, 

    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GenericBoxComponent,
    InformationComponent,
    ProductListComponent,
    
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
