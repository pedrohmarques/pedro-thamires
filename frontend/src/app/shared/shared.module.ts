import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// import {
//     MatPaginatorIntl,
//     MatPaginatorModule,
//   } from '@angular/material/paginator';
//   import { MatButtonModule } from '@angular/material/button';
//   import { MatExpansionModule } from '@angular/material/expansion';
//   import { MatIconModule } from '@angular/material/icon';
//   import { MatListModule } from '@angular/material/list';
//   import { MatMenuModule } from '@angular/material/menu';
//   import { MatRadioModule } from '@angular/material/radio';
//   import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
//   import { MatSidenavModule } from '@angular/material/sidenav';
//   import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//   import { MatSelectModule } from '@angular/material/select';
//   import { MatTabsModule } from '@angular/material/tabs';
//   import { MatTableModule } from '@angular/material/table';
//   import { MatTooltipModule } from '@angular/material/tooltip';
//   import { MatDialogModule } from '@angular/material/dialog';
//   import { MatProgressBarModule } from '@angular/material/progress-bar';
//   import { MatCheckboxModule } from '@angular/material/checkbox';
//   import { MatFormFieldModule } from '@angular/material/form-field';
//   import { MatInputModule } from '@angular/material/input';
//   import { MatDatepickerModule } from '@angular/material/datepicker';
//   import { MatSnackBarModule } from '@angular/material/snack-bar';
//   import { MatToolbarModule } from '@angular/material/toolbar';
//   import { MatChipsModule } from '@angular/material/chips';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/header/components/navigation/navigation.component';
import { GenericBoxComponent } from './components/generic-box/generic-box.component';

NavigationComponent

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GenericBoxComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GenericBoxComponent
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
