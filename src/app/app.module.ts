import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/panel';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CronEditorModule } from 'ngx-cron-editor';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { NvhttpService } from './services/nvhttp.service';
// import { NVBreadCrumbService } from './services/nvbreadcrumb.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// import { MatSnackBarModule } from '@angular/material';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DavHehalComponent } from './components/dav-hehal/dav-hehal.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { FeatruresComponent } from './components/dav-hehal/featrures/featrures.component';
import { PricingComponent } from './components/dav-hehal/pricing/pricing.component';
import { ResourcesComponent } from './components/dav-hehal/resources/resources.component';
import { ShortlyComponent } from './components/dav-hehal/shortly/shortly.component';
//import { ClipboardModule } from 'ngx-clipboard';
import { NgxCopyToClipboardModule } from 'ngx-copy-to-clipboard';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    DavHehalComponent,
    FeatruresComponent,
    PricingComponent,
    ResourcesComponent,
    ShortlyComponent,


  ],
  imports: [
    BrowserModule, AppRoutingModule,
    HttpClientModule, SliderModule, CardModule,
    TooltipModule, TabMenuModule, BrowserAnimationsModule,
    HttpClientModule, FormsModule, ButtonModule, FormsModule, ReactiveFormsModule,


  ],
  providers: [NvhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
