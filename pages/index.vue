<template>
  <div>
    <CarouselComponent v-bind:items="items" />
    <ModulesComponent v-bind:contents="contents" />
  </div>
</template>

<script>
import CarouselComponent from '@/components/index/carousel';
import ModulesComponent from '@/components/index/modules';

export default {
  components: { CarouselComponent, ModulesComponent },

  data: () => ({
    items: [
      {
        title: 'Biblioteca universitaria, accede a toda la documentacion universitaria',
        subtitle: 'Universidad Modular Abierta te da acceso a todos los libros, revistas, articulos cientificos y mas...',
        img: '/slides/library2'
      },
      {
        title: 'Almacenamiento en la nube. Guarda, organiza y descarga todos tus archivos ',
        subtitle: 'Universidad Modular Abierta te proporciona un servicio en la nube, donde podras almacenar, editar y descargar todos tus documentos, imagenes, videos y mas...',
        img: 'slides/myFiles2'
      }
    ],

    contents: [
      {
        title: 'Dashboard',
        subtitle: 'Perfil estudiantil',
        text: 'Seccion donde te mostrara todas las actividades y libros subidos recientemente',
        img: '/slides/dashboard.png'
      },
      {
        title: 'Biblioteca Universitaria',
        subtitle: 'Todos los libros a tu disposicion',
        text: 'Encontraras todos los articulos, libros, revistas con esta nueva plataforma educativa',
        img: '/slides/library.png'
      },
      {
        title: 'Almacenamiento en la nube',
        subtitle: 'Guarda y organiza todos tus archivos.',
        text: 'Podras acceder a todos tus documentos desde cualquier parte del mundo.',
        img: '/slides/myFiles.png'
      },
      {
        title: 'Notas y recordatorios',
        subtitle: 'Añade tus notas y recoratorios.',
        text: 'Seccion donde dejaras plasmados tus pensamientos, nuevas actividades, entre otros.',
        img: '/slides/myNotes.png'
      },
      {
        title: 'Links',
        subtitle: 'Enlaces a sitios web',
        text: 'Guarda tus sitios web favoritos y accede a ellos sin quebrarte la cabeza',
        img: '/slides/myLinks.png'
      },
      {
        title: 'Descargar',
        subtitle: 'Centro de descargas',
        text: 'Visualizaras todas las descargas que hayas realizado',
        img: '/slides/myDownloads.png'
      }
    ]
  })
}
</script>

<style>
  #carouse p {
    font-size: 15px;
  }

  @media screen and (min-width: 300px) {
    #image {display: none;}
  }

  @media screen and (min-width: 980px){
    #image { display: block; }
  }

  #sheet { height: 100vh; }
  @media screen and (min-width: 720px){
    #carousel h1{
      font-size: 50px;
    }
  }
</style>