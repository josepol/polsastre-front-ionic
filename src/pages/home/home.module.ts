import { NgModule } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/components/shared.module';
import { DefinitionComponent } from './components/definition/definition';
import { SteveJobsComponent } from './components/stevejobs/stevejobs';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { KnowledgeComponent } from './components/knowledge/knowledge';
import { IntroComponent } from './components/intro/intro';
import { BlogModule } from '../blog/blog.module';

@NgModule({
	declarations: [
        HomePage,
        CarrouselComponent,
        IntroComponent,
        DefinitionComponent,
        SteveJobsComponent,
        PortfolioComponent,
        KnowledgeComponent
	],
	imports: [
        SharedModule,
        BlogModule,
        IonicPageModule.forChild(HomePage)
    ],
	exports: [
    ]
})
export class HomeModule {}
