import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  projects: Project[];
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  categories: Category[] = [
    {
      id: 'residencial',
      title: 'Residencial',
      subtitle: 'O refúgio de uma vida',
      coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      projects: [
        {
          id: 1,
          name: 'Casa Horizonte',
          description: 'Uma residência com panos de vidro infinitos e vista deslumbrante, integrando a natureza ao design de interiores de forma unificada.',
          images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
          ]
        },
        {
          id: 2,
          name: 'Villa Piemonte',
          description: 'Luxo rústico com acabamentos em pedra natural e madeira maciça. 500m² de conforto puro com paisagismo exuberante.',
          images: [
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1613545325278-f24b0eb11d18?q=80&w=2070&auto=format&fit=crop'
          ]
        },
        {
          id: 3,
          name: 'Refúgio Minimal',
          description: 'Linhas retas, concreto aparente e paleta monocromática. A essência do minimalismo moderno traduzida em espaços amplos.',
          images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
          ]
        },
        {
          id: 4,
          name: 'Penthouse Lumina',
          description: 'No alto da cidade, cobertura de luxo com automação total, piscina com borda infinita e terraço panorâmico.',
          images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1de2d9d115?q=80&w=1973&auto=format&fit=crop'
          ]
        }
      ]
    },
    {
      id: 'comercial',
      title: 'Comercial',
      subtitle: 'Onde o sucesso ganha endereço',
      coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      projects: [
        {
          id: 5,
          name: 'Corporate Tower A',
          description: 'Andar corporativo completo com certificação LEED, divisórias de vidro duplo antirruído e climatização zona-a-zona.',
          images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
          ]
        },
        {
          id: 6,
          name: 'Nexus Office',
          description: 'Espaço colaborativo dinâmico (Coworking) projetado para fluidez, conforto neuro-arquitetônico e conectividade total.',
          images: [
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1536604673810-8fd11cb62dc8?q=80&w=2070&auto=format&fit=crop'
          ]
        },
        {
          id: 7,
          name: 'Boutique Alpha',
          description: 'Fachada minimalista com vidro curvo e layout focado na experiência de varejo de altíssimo luxo.',
          images: [
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
          ]
        },
        {
          id: 8,
          name: 'Gondola Plaza',
          description: 'Centro comercial aberto de arquitetura biofílica, incorporando dezenas de árvores e iluminação cruzada.',
          images: [
            'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519451187483-e02ce8eecc2a?q=80&w=2070&auto=format&fit=crop'
          ]
        }
      ]
    },
    {
      id: 'reformas',
      title: 'Reformas',
      subtitle: 'A arte de dar nova alma ao que já existe',
      coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop',
      projects: [
        {
          id: 9,
          name: 'Restauro Histórico',
          description: 'Revitalização de sobrado da década de 40. Preservação de azulejaria original aliada ao conforto de um home-office europeu.',
          images: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
          ]
        },
        {
          id: 10,
          name: 'Loft Industrial',
          description: 'Transformação de galpão abandonado em um loft residencial industrial chic, com vigas expostas e mobiliário curadoria.',
          images: [
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2024&auto=format&fit=crop'
          ]
        },
        {
          id: 11,
          name: 'Retrofit Sede JHS',
          description: 'Reforma integral de edifício comercial da década de 80. Nova fachada ventilada, modernização de elevadores e automação.',
          images: [
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
          ]
        },
        {
          id: 12,
          name: 'Apartamento Opus',
          description: 'Repaginação completa. Derrubada de paredes criando um grand living com área gourmet integrada de borda a borda.',
          images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop'
          ]
        }
      ]
    }
  ];

  selectedCategory: Category | null = null;
  selectedProject: Project | null = null;
  isLightboxOpen = false;
  currentImageIndex = 0;

  selectCategory(category: Category) {
    this.selectedCategory = category;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack() {
    this.selectedCategory = null;
  }

  openLightbox(project: Project) {
    this.selectedProject = project;
    this.currentImageIndex = 0;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.selectedProject) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProject.images.length;
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.selectedProject) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
    }
  }
}
