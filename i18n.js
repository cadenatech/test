(function () {
  window.I18N = {
    es: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Cargando material',
        message: 'Preparando...',
        eta: 'Tiempo estimado de descarga: --',
        etaPrefix: 'Tiempo estimado de descarga: ',
        downloadedPrefix: 'Descargado: ',
        note: 'Las siguientes veces la visualización será instantánea.'
      },
      header: {
        eyebrow: 'Materiales en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Ayuda',
        settings: 'Ajustes',
        settingsHint: 'Configura la disponibilidad del recurso',
        language: 'Idioma',
        languageHint: 'Cambiar idioma',
        subtitle: 'Autopublicación de recursos educativos desde tu almacenamiento en la nube.'
      },
      settings: {
        title: 'Ajustes de visibilidad',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por fechas',
        restrictHint: 'Aquí puedes definir cuándo estará visible el recurso y qué acciones estarán disponibles en el gestor de recursos.',
        restrictToggle: 'Limitar el acceso por fechas',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        neverExpires: 'Acceso sin fecha de fin',
        actionsTitle: 'Acciones disponibles durante el acceso',
        allowShare: 'Compartir',
        allowEmbed: 'Insertar en web',
        allowDownload: 'Descargar'
      },
      restrictionModal: {
        title: 'Acceso restringido',
        body: 'Este recurso no está disponible en este momento.',
        rangeStart: 'Disponible desde: {date}',
        rangeEnd: 'Hasta: {date}',
        rangeNoEnd: 'Sin fecha de fin',
        countdown: 'Disponible en: {time}'
      },
      lang: {
        label: 'Idioma',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        publish: 'Publicar',
        manager: 'Gestor de recursos'
      },
      publish: {
        title: 'Publicar un recurso',
        subtitle: 'Elige cómo quieres empezar.',
        back: 'Volver al inicio',
        zipHelp: {
          summary: '¿Qué es un ZIP?',
          bodyHtml: 'Un <strong>ZIP</strong> es un archivo comprimido que agrupa varios archivos (y carpetas) en uno solo.'
        },
        htmlHelp: {
          summary: '¿Qué es el HTML y dónde lo obtengo?',
          bodyHtml: 'El <strong>HTML</strong> es el código de una página web. Si una IA crea una web, normalmente da el código y un botón de “Copiar” para copiarlo. El archivo principal se suele llamar <code>index.html</code>'
        },
        choice: {
          zipper: {
            title: 'Crea un ZIP',
            note: 'Empieza creando un ZIP desde tus archivos o desde HTML.',
            restrictHint: 'También puedes subir un ZIP para limitar su acceso por fechas.'
          },
          main: {
            title: 'Ya tengo un ZIP o ELPX',
            note: 'Pega un enlace público al ZIP (o al archivo .elpx de eXeLearning) y genera el enlace del visor.',
            elpxTooltip: '¿Qué es ELPX?',
            elpxTooltipHtml: 'Un archivo <code>.elpx</code> es un proyecto de eXeLearning. Por dentro es un ZIP, así que el visor puede abrirlo.'
          }
        }
      },
      tabs: {
        label: 'Secciones'
      },
      main: {
        subtitle: 'Si ya tienes tu recurso en formato ZIP (o .elpx de eXeLearning 3+) en un servicio con enlace público (Drive, Dropbox, etc.), pega aquí el enlace para generar el enlace.',
        form: {
          title: 'Ya tengo un ZIP o ELPX',
          step: 'Pega el enlace público al ZIP (o .elpx) y pulsa “Crear enlace”.',
          placeholder: 'Pega aquí el enlace público del ZIP o del .elpx',
          submit: 'Crear enlace'
        },
        output: {
          title: 'Enlace para compartir',
          step: 'Copia el enlace para compartir, copia el código para insertar el recurso en otra web o abre la vista previa.',
          placeholder: 'Aquí se mostrará el enlace',
          copy: 'Copiar enlace',
          qr: 'QR',
          copyTooltip: 'Copiar enlace',
          qrTooltip: 'QR (ideal para proyectar o imprimir)',
          embedTooltip: 'Insertar en una web (genera un iframe listo para pegar)',
          openTooltip: 'Abrir vista previa',
          embed: 'Insertar en una web',
          open: 'Abrir vista previa'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Otros servicios',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://tu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuario/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/archivo.zip'
      },
      manager: {
        title: 'Recursos guardados',
        subtitle: 'Gestiona el espacio que ocupan los materiales guardados en este navegador.',
        deleteAll: 'Eliminar todos los recursos',
        deleteAllConfirm: '¿Seguro que quieres eliminar todos los recursos guardados en este navegador? Esta acción no se puede deshacer.',
        savedAt: 'Guardado:',
        stats: {
          used: 'Espacio usado',
          total: 'Espacio total',
          count: 'Recursos guardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Fecha',
          start: 'Inicio',
          size: 'Tamaño',
          dirAsc: 'Ascendente',
          dirDesc: 'Descendente',
          dirHelp: 'Cambiar sentido de orden.'
        },
        deleteAllHelp: 'Borra todos los recursos guardados en este navegador.',
        settings: {
          open: 'Ajustes de limpieza',
          modalTitle: 'Ajustes de limpieza',
          usage: {
            label: 'Límite de uso antes de limpiar',
            help: 'Si se supera este porcentaje de la cuota, se borran los recursos más antiguos.'
          },
          days: {
            label: 'Días para borrar recursos antiguos',
            help: 'Si un recurso no se abre en este periodo, se eliminará automáticamente.',
            suffix: 'días'
          },
          reset: 'Restaurar valores por defecto',
          resetHelp: 'Vuelve a 70% y 30 días y aplica la limpieza.'
        },
        actions: {
          view: 'Ver',
          share: 'Compartir',
          qr: 'QR',
          embed: 'Insertar en una web',
          edit: 'Editar el título',
          download: 'Descargar archivo'
        },
        editPrompt: 'Título del recurso',
        empty: 'No hay recursos guardados en este navegador.',
        siteNoUrl: 'Sitio sin URL',
        noDate: 'sin fecha'
      },
      badges: {
        scheduled: 'Programado',
        opening: 'Inicio: {date}',
        closing: 'Fin: {date}'
      },
      zipper: {
        title: 'Crear ZIP para el visor',
        restrict: {
          summaryTitle: 'Acceso limitado por fechas'
        },
        accordion: {
          filesTitle: '¿Tienes archivos? Crea el ZIP'
        },
        subtitle: {
          item1: 'Para publicar tu recurso, guarda todos los archivos en una carpeta y comprímela en un archivo <strong>.zip</strong>.',
          item2: 'Si tu recurso está hecho con <strong>eXeLearning 3 o superior</strong>, puedes usar directamente el archivo <strong>.elpx</strong>.',
          item3: 'Si usas <strong>eXeLearning 2.x</strong>, exporta el proyecto a <strong>ZIP</strong> desde el programa y continúa con la opción <strong>“Ya tengo un ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: en la versión 3+ puedes usar directamente un .elpx (ya es un ZIP). Versión 2.x: Archivo > Exportar > Sitio Web > Archivo comprimido ZIP.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Versión 3+: puedes usar directamente el archivo <code>.elpx</code> (ya es un ZIP).<br>• Versión 2.x: Archivo &gt; Exportar &gt; Sitio Web &gt; Archivo comprimido ZIP.'
        },
        step1: {
          title: 'Añade tus archivos',
          note: 'Arrastra la carpeta o selecciona los archivos desde el botón.',
          detail: 'Puedes arrastrar una carpeta o archivos. También puedes seleccionar una carpeta completa desde el botón.'
        },
        dropzone: {
          title: 'Arrastra aquí la carpeta o los archivos',
          hint: 'Se respetan las carpetas internas.',
          folder: 'Elegir carpeta',
          files: 'Elegir archivos'
        },
        status: {
          empty: 'No hay archivos seleccionados.',
          filesReady: 'Archivos listos: {count}.',
          ready: 'Listo para crear el ZIP.',
          readyHint: 'Prepara el ZIP para obtener tu archivo.',
          selectFirst: 'Selecciona archivos o una carpeta primero.',
          engineMissing: 'No se pudo cargar el motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado.',
          failed: 'No se pudo crear el ZIP. Revisa los archivos.'
        },
        step2: {
          title: 'Descarga el ZIP',
          note: 'Crea el ZIP y se descargará automáticamente.',
          detail: 'Al crear el ZIP se descargará un archivo que puedes subir a Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'Nombre del ZIP',
          placeholder: 'mi_recurso',
          default: 'mi_recurso'
        },
        build: 'Crear y descargar ZIP',
        html: {
          title: '¿No tienes archivos? Pega el HTML',
          note: 'Pega el HTML completo y el visor creará un ZIP con un <code>index.html</code> listo para descargar.',
          placeholder: '<!doctype html>...',
          build: 'Crear ZIP desde HTML',
          status: {
            ready: 'Listo para crear el ZIP desde tu HTML.',
            reactDetected: 'Este contenido parece React/JSX (no HTML). Copia el prompt y pégalo en el chat de tu IA para convertirlo a HTML.',
            empty: '',
            creating: 'Creando ZIP...',
            downloaded: 'ZIP descargado.',
            failed: 'No se pudo crear el ZIP. Revisa el HTML.'
          }
        },
        restrict: {
          title: '¿Quieres limitar el acceso a un ZIP ya creado?',
          note: 'Sube tu ZIP y el visor añadirá las restricciones en un archivo JSON. Después tendrás que volver a subirlo a Drive, Dropbox, etc.',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restricciones y descargar',
          status: {
            ready: 'Selecciona un ZIP para añadir las restricciones.',
            working: 'Aplicando restricciones...',
            done: 'ZIP listo con restricciones.',
            failed: 'No se pudo modificar el ZIP. Revisa el archivo.'
          }
        },
        help: {
          inline: 'Si ya has creado un archivo ZIP y lo has compartido en un servicio con enlace público, pasa a la sección: “Ya tengo un ZIP o ELPX”.',
          nextStepText: 'El siguiente paso es subir y compartir con enlace público el archivo ZIP o ELPX, cuando lo tengas pulsa sobre Continuar.',
          goTab: 'Siguiente: “Ya tengo un ZIP o ELPX”'
        }
      },
      html: {
        title: 'Elige el HTML inicial',
        subtitle: 'No se encontró un index.html. Selecciona el archivo HTML que quieres abrir primero.',
        confirm: 'Usar este HTML'
      },
      embed: {
        title: 'Insertar en una web',
        subtitle: 'Copia y pega este código HTML en tu web para insertar tu recurso.',
        copy: 'Copiar código',
        fallback: {
          title: 'No se puede abrir incrustado',
          subtitle: 'Tu navegador o la página donde se inserta está bloqueando el almacenamiento necesario. Abre el recurso en una pestaña nueva.',
          open: 'Abrir en pestaña nueva'
        }
      },
      reactPrompt: {
        title: 'Esto parece React',
        subtitle: 'Este contenido parece React/JSX (no HTML). Copia este prompt y pégalo en el chat de tu IA para que lo convierta a HTML.',
        prompt: 'Convierte este código hecho en React/JSX en un único `index.html` que funcione al abrirlo directamente en el navegador (solo HTML, CSS y JavaScript). Devuélveme únicamente el contenido completo del archivo HTML.',
        copy: 'Copiar prompt'
      },
      about: {
        title: 'Ayuda',
        intro: 'Guía rápida para publicar, compartir y gestionar recursos en el visor.',
        can: {
          title: 'Qué puedes subir',
          item1: 'ZIPs con páginas web estáticas y sus recursos (archivos HTML, imágenes, audio, vídeo, PDF, etc.).',
          item2: 'Materiales creados con eXeLearning u otras herramientas que exportan a web.',
          item3: 'Cualquier material creado con IA (documentos, infografías, etc.) que puedas descargar como página web (HTML).',
          item4: 'Carpetas con un HTML principal (normalmente <code>index.html</code>).'
        },
        cant: {
          title: 'Qué no funciona o puede fallar',
          item1: 'Webs que necesitan servidor (formularios que guardan datos, bases de datos, PHP o similar).',
          item2: 'Enlaces externos que requieren iniciar sesión o permisos especiales.',
          item3: 'ZIPs que no contienen ningún archivo HTML.'
        },
        how: {
          title: 'Cómo funciona',
          step1: 'Prepara tu recurso como una carpeta con páginas web (HTML) y comprímelo en ZIP. Puedes hacerlo con la opción “Crear un ZIP”.',
          step2: 'Sube el ZIP a un servicio con enlace público (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparte el archivo para que cualquiera con el enlace pueda verlo.',
          step4: 'Copia la URL y pégala en el campo “Pega aquí el enlace público”.',
          step5: 'El enlace para compartir es permanente, así que puedes distribuirlo al alumnado.'
        },
        drive: {
          title: 'Importante sobre Google Drive',
          note: 'Google Drive limita la descarga directa de archivos grandes (aprox. 25 MB). Si tu ZIP supera ese tamaño, puede fallar. Dropbox, Nextcloud y otros servicios suelen permitir archivos más grandes sin ese límite.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Índice de ayuda">'
          + '<p class="about-index__title">Índice</p>'
          + '<ul>'
          + '<li><a href="#help-que-hace">Qué hace este visor</a></li>'
          + '<li><a href="#help-como-se-usa">Cómo se usa</a></li>'
          + '<li><a href="#help-limitaciones">Limitaciones y problemas típicos</a></li>'
          + '</ul>'
          + '</nav>'
          + '<section aria-labelledby="help-que-hace">'
          + '<h3 class="about-section-title" id="help-que-hace" tabindex="-1">Qué hace este visor</h3>'
          + '<p>Abre recursos web empaquetados en <strong>ZIP</strong> o <strong>ELPX</strong> directamente en el navegador.</p>'
          + '<p>El visor <strong>no sube ni publica</strong> tu material: solo genera un enlace y lo abre.</p>'
          + '<ul>'
          + '<li><strong>Tú alojas el ZIP</strong> en Drive, Dropbox, Nextcloud, GitHub… con enlace público.</li>'
          + '<li>Cada persona que abre el enlace <strong>descarga el ZIP en su navegador</strong> y el visor guarda una <strong>copia local</strong> para que se abra más rápido la próxima vez.</li>'
          + '<li>El espacio y los recursos del gestor son <strong>solo de este navegador/dispositivo</strong>. No es un servidor compartido.</li>'
          + '<li><strong>No se guarda en GitHub</strong>: GitHub Pages solo sirve la página del visor (el programa), no tus recursos.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Privacidad</strong>: el visor no comparte automáticamente nada de tu navegador ni envía tus recursos a terceros. Lo único externo es la descarga del ZIP desde el enlace que hayas proporcionado.</p>'
          + '<p class="about-note"><strong>Importante</strong>: si el enlace al ZIP es público, cualquiera con ese enlace podrá descargarlo y verlo (igual que con cualquier enlace público).</p>'
          + '</section>'
          + '<section aria-labelledby="help-como-se-usa">'
          + '<h3 class="about-section-title" id="help-como-se-usa" tabindex="-1">Cómo se usa</h3>'
          + '<ol class="about-steps">'
          + '<li>Prepara tu recurso como una web estática (HTML, CSS, imágenes, audio, vídeo…).</li>'
          + '<li>Elige una ruta: <strong>Crear un ZIP</strong> o <strong>Ya tengo un ZIP o ELPX</strong>.</li>'
          + '<li>Sube el archivo a un servicio con enlace público y comparte el enlace del visor.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-crear" tabindex="-1">Ruta: Crear un ZIP</h4>'
          + '<ol class="about-steps">'
          + '<li>En <strong>Publicar</strong>, entra en <strong>Crear un ZIP</strong>.</li>'
          + '<li>Si no tienes archivos, usa <strong>¿No tienes archivos? Pega el HTML</strong> y pulsa <strong>Crear ZIP desde HTML</strong>.</li>'
          + '<li>Si tienes archivos, abre <strong>¿Tienes archivos? Crea el ZIP</strong>, añade la carpeta o los archivos y pulsa <strong>Crear y descargar ZIP</strong>.</li>'
          + '<li>Si tu ZIP no tiene <code>index.html</code>, el visor te pedirá elegir el HTML inicial.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-tengo" tabindex="-1">Ruta: Ya tengo un ZIP o ELPX</h4>'
          + '<ol class="about-steps">'
          + '<li>En <strong>Publicar</strong>, entra en <strong>Ya tengo un ZIP o ELPX</strong>.</li>'
          + '<li>Pega un enlace público al archivo <strong>ZIP</strong> o <strong>ELPX</strong> y pulsa <strong>Crear enlace</strong>.</li>'
          + '<li>Usa <strong>Copiar enlace</strong>, <strong>Insertar en una web</strong> o <strong>Abrir vista previa</strong> según lo que necesites.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-visibilidad" tabindex="-1">Visibilidad y acceso</h4>'
          + '<p>En <strong>Ajustes</strong> puedes limitar cuándo estará visible el recurso (acceso por fechas) y qué acciones estarán disponibles durante ese acceso.</p>'
          + '<ul>'
          + '<li><strong>Limitar el acceso por fechas</strong>: define una fecha y hora de <strong>Inicio</strong> y, si quieres, una de <strong>Fin</strong>.</li>'
          + '<li><strong>Acceso sin fecha de fin</strong>: el recurso se mostrará a partir de <strong>Inicio</strong> sin cerrar automáticamente.</li>'
          + '<li><strong>Acciones disponibles durante el acceso</strong>: permite o bloquea <strong>Compartir</strong>, <strong>Insertar en web</strong> y <strong>Descargar</strong> desde el gestor.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Cuando el acceso está cerrado</strong>: el visor no muestra el contenido y aparece el aviso de acceso restringido. El enlace del visor sigue existiendo, pero no permitirá ver el recurso hasta que vuelva a estar dentro del periodo.</p>'
          + '<h4 class="about-subtitle" id="help-gestor" tabindex="-1">Gestor de recursos</h4>'
          + '<p>El gestor te muestra los recursos que has abierto y guardado <strong>en este navegador</strong>.</p>'
          + '<ul>'
          + '<li><strong>Ver</strong>: abre el recurso guardado.</li>'
          + '<li><strong>Compartir</strong>: copia el enlace del visor para ese recurso.</li>'
          + '<li><strong>Insertar en web</strong>: muestra el código para incrustarlo (si está permitido).</li>'
          + '<li><strong>Editar</strong>: cambia el título mostrado en el gestor.</li>'
          + '<li><strong>Descargar</strong>: descarga el archivo original (ZIP o ELPX).</li>'
          + '<li><strong>Eliminar</strong>: borra el recurso del almacenamiento local de este navegador.</li>'
          + '</ul>'
          + '<p class="about-note">Nota: si borras los datos del navegador, usas otro dispositivo o un navegador distinto, estos recursos pueden dejar de aparecer.</p>'
          + '</section>'
          + '<section aria-labelledby="help-limitaciones">'
          + '<h3 class="about-section-title" id="help-limitaciones" tabindex="-1">Limitaciones y problemas típicos</h3>'
          + '<ul>'
          + '<li>Funciona con webs estáticas. No funcionará bien con webs que necesitan servidor (bases de datos, PHP, formularios que guardan datos…).</li>'
          + '<li>El archivo debe estar en un enlace público (sin inicio de sesión). Si el servicio pide permisos, el visor no podrá descargarlo.</li>'
          + '<li>Si el ZIP no contiene HTML, no se podrá abrir. Si falta <code>index.html</code>, tendrás que elegir el HTML inicial.</li>'
          + '<li>Google Drive puede limitar la descarga directa de archivos grandes (aprox. 25 MB). Si falla, prueba con Dropbox, Nextcloud u otro servicio.</li>'
          + '</ul>'
          + '</section>'
      },
      error: {
        driveTooLarge: 'El archivo es demasiado grande y Google Drive limita las descargas. Intenta usando Nextcloud, Dropbox u otro servicio.',
        loadZip: 'No se pudo cargar el ZIP.',
        restricted: 'Este recurso ya no está disponible por las restricciones de fecha.',
        embedNotAllowed: 'La inserción en web no está permitida para este recurso.',
        noHtmlSelected: 'No se seleccionó ningún HTML.',
        htmlPickerOpen: 'No se pudo abrir el selector de HTML.',
        serviceWorkerUnavailable: 'Service worker no disponible.',
        sha1Unavailable: 'SHA-1 no disponible en este navegador.',
        configMissing: 'Configura GAS_WEBAPP_URL en config.js.',
        needHtmlFile: 'El ZIP necesita al menos un archivo .html.',
        offlineNotAllowed: 'Este navegador no permite el visor offline.',
        fflateMissing: 'No se pudo cargar el motor ZIP (fflate).',
        zipNoWebFiles: 'El ZIP no contiene archivos web.',
        noSpace: 'No hay espacio suficiente en el navegador.'
      },
      status: {
        preparing: 'Preparando...',
        preparingZip: 'Preparando ZIP...',
        connecting: 'Conectando',
        downloadingZip: 'Descargando ZIP...',
        restrictedReady: 'El recurso está restringido por fecha. El enlace ya está listo.',
        unpacking: 'Descomprimiendo...',
        saving: 'Guardando en el navegador...',
        copySuccess: 'Enlace copiado.'
      },
      common: {
        close: 'Cerrar',
        cancel: 'Cancelar',
        delete: 'Eliminar'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    ca: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Carregant material',
        message: 'Preparant...',
        eta: 'Temps estimat de descàrrega: --',
        etaPrefix: 'Temps estimat de descàrrega: ',
        downloadedPrefix: 'Descarregat: ',
        note: 'Les següents vegades la visualització serà instantània.'
      },
      header: {
        eyebrow: 'Materials en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Ajuda',
        settings: 'Ajustos',
        settingsHint: 'Configura la disponibilitat del recurs',
        language: 'Idioma',
        languageHint: 'Canviar idioma',
        subtitle: 'Comparteix els teus recursos educatius des del teu emmagatzematge favorit al núvol.'
      },
      settings: {
        title: 'Ajustos de visibilitat',
        languageTitle: 'Idioma',
        restrictTitle: 'Accés per dates',
        restrictHint: 'Aquí pots definir quan estarà visible el recurs i quines accions estaran disponibles al gestor de recursos.',
        restrictToggle: 'Limitar l’accés per dates',
        startLabel: 'Inici',
        endLabel: 'Fi',
        neverExpires: 'Accés sense data de fi',
        actionsTitle: 'Accions disponibles durant l’accés',
        allowShare: 'Compartir',
        allowEmbed: 'Inserir en web',
        allowDownload: 'Descarregar'
      },
      restrictionModal: {
        title: 'Accés restringit',
        body: 'Aquest recurs no està disponible en aquest moment.',
        rangeStart: 'Disponible des de: {date}',
        rangeEnd: 'Fins a: {date}',
        rangeNoEnd: 'Sense data de fi',
        countdown: 'Disponible en: {time}'
      },
      lang: {
        label: 'Idioma',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        publish: 'Publicar',
        manager: 'Gestor de recursos'
      },
      publish: {
        title: 'Publicar un recurs',
        subtitle: 'Tria com vols començar.',
        back: "Tornar a l'inici",
        zipHelp: {
          summary: 'Què és un ZIP?',
          bodyHtml: 'Un <strong>ZIP</strong> és un fitxer comprimit que agrupa diversos fitxers (i carpetes) en un de sol.'
        },
        htmlHelp: {
          summary: 'Què és l’HTML i d’on l’obtinc?',
          bodyHtml: 'L’<strong>HTML</strong> és el codi d’una pàgina web. Si una IA crea una web, normalment dona el codi i un botó de “Copiar” per copiar-lo. El fitxer principal se sol dir <code>index.html</code>'
        },
        choice: {
          zipper: {
            title: 'Crear un ZIP',
            note: 'Comença creant un ZIP des dels teus fitxers o des d’HTML.',
            restrictHint: 'També pots pujar un ZIP per limitar-ne l’accés per dates.'
          },
          main: {
            title: 'Ja tinc un ZIP o ELPX',
            note: 'Enganxa un enllaç públic al ZIP (o al fitxer .elpx d’eXeLearning) i genera l’enllaç del visor.',
            elpxTooltip: 'Què és ELPX?',
            elpxTooltipHtml: 'Un fitxer <code>.elpx</code> és un projecte d’eXeLearning. Per dins és un ZIP, així que el visor el pot obrir.'
          }
        }
      },
      tabs: {
        label: 'Seccions'
      },
      main: {
        subtitle: "Si ja tens el teu recurs en format ZIP (o .elpx d’eXeLearning 3+) en un servei amb enllaç públic (Drive, Dropbox, etc.), enganxa aquí l'enllaç per generar l’enllaç del visor.",
        form: {
          title: 'Ja tinc un ZIP o ELPX',
          step: 'Enganxa l’enllaç públic al ZIP (o .elpx) i prem “Crear enllaç”.',
          placeholder: "Enganxa aquí l'enllaç públic del ZIP o del .elpx",
          submit: 'Crear enllaç'
        },
        output: {
          title: 'Enllaç per compartir',
          step: 'Copia l’enllaç o obre la vista prèvia.',
          placeholder: 'Enllaç per compartir',
          copy: 'Copiar enllaç',
          qr: 'QR',
          copyTooltip: 'Copiar enllaç',
          qrTooltip: 'QR (ideal per projectar o imprimir)',
          embedTooltip: 'Inserir en una web (genera un iframe llest per enganxar)',
          openTooltip: 'Obrir vista prèvia',
          embed: 'Inserir en una web',
          open: 'Obrir vista prèvia'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Altres serveis',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://el-teu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuari/repositori/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/arxiu.zip'
      },
      manager: {
        title: 'Recursos desats',
        subtitle: 'Gestiona l’espai que ocupen els materials desats en aquest navegador.',
        deleteAll: 'Eliminar tots els recursos',
        deleteAllConfirm: 'Segur que vols eliminar tots els recursos desats en aquest navegador? Aquesta acció no es pot desfer.',
        deleteAllHelp: 'Esborra tots els recursos desats en aquest navegador.',
        savedAt: 'Desat:',
        stats: {
          used: 'Espai usat',
          total: 'Espai total',
          count: 'Recursos desats'
        },
        sort: {
          label: 'Ordenar per',
          title: 'Títol',
          date: 'Data',
          start: 'Inici',
          size: 'Mida',
          dirAsc: 'Ascendent',
          dirDesc: 'Descendent',
          dirHelp: 'Canviar el sentit d’ordenació.'
        },
        settings: {
          open: 'Ajustos de neteja',
          modalTitle: 'Ajustos de neteja',
          usage: {
            label: 'Límit d’ús abans de netejar',
            help: 'Si se supera aquest percentatge de la quota, s’esborraran els recursos més antics.'
          },
          days: {
            label: 'Dies per esborrar recursos antics',
            help: 'Si un recurs no s’obre en aquest període, s’eliminarà automàticament.',
            suffix: 'dies'
          },
          reset: 'Restaurar valors per defecte',
          resetHelp: 'Torna a 70% i 30 dies i aplica la neteja.'
        },
        actions: {
          view: 'Veure',
          share: 'Compartir',
          qr: 'QR',
          embed: 'Inserir en una web',
          edit: 'Editar el títol',
          download: 'Descarregar fitxer'
        },
        editPrompt: 'Títol del recurs',
        empty: 'No hi ha recursos desats en aquest navegador.',
        siteNoUrl: 'Lloc sense URL',
        noDate: 'sense data'
      },
      badges: {
        scheduled: 'Programat',
        opening: 'Inici: {date}',
        closing: 'Fi: {date}'
      },
      zipper: {
        title: 'Crear ZIP per al visor',
        accordion: {
          filesTitle: 'Tens fitxers? Crea el ZIP'
        },
        subtitle: {
          item1: 'Per publicar el teu recurs, guarda tots els fitxers en una carpeta i comprimeix-la en un fitxer <strong>.zip</strong>.',
          item2: 'Si el teu recurs està fet amb <strong>eXeLearning 3 o superior</strong>, pots usar directament el fitxer <strong>.elpx</strong>.',
          item3: 'Si uses <strong>eXeLearning 2.x</strong>, exporta el projecte a <strong>ZIP</strong> des del programa i continua amb l’opció <strong>“Ja tinc un ZIP”</strong>.'
        },
        exe: {
          tooltip: "eXeLearning: a la versió 3+ pots usar directament un .elpx (ja és un ZIP). Versió 2.x: Fitxer > Exportar > Lloc web > Arxiu comprimit ZIP. Versió 3.x: Fitxer > Descarregar com > Lloc web.",
          tooltipHtml: "<strong>eXeLearning:</strong><br>• Versió 3+: pots usar directament el fitxer <code>.elpx</code> (ja és un ZIP).<br>• Versió 2.x: Fitxer &gt; Exportar &gt; Lloc web &gt; Arxiu comprimit ZIP.<br>• Versió 3.x: Fitxer &gt; Descarregar com &gt; Lloc web."
        },
        step1: {
          title: 'Afegeix els teus fitxers',
          note: 'Arrossega la carpeta o selecciona els fitxers des del botó.',
          detail: 'Pots arrossegar una carpeta o fitxers. També pots seleccionar una carpeta completa des del botó.'
        },
        dropzone: {
          title: 'Arrossega aquí la carpeta o els fitxers',
          hint: 'Es respecten les carpetes internes.',
          folder: 'Escollir carpeta',
          files: 'Escollir fitxers'
        },
        status: {
          empty: 'No hi ha fitxers seleccionats.',
          filesReady: 'Fitxers llestos: {count}.',
          ready: 'A punt per crear el ZIP.',
          readyHint: 'Prepara el ZIP per obtenir el teu fitxer.',
          selectFirst: 'Selecciona fitxers o una carpeta primer.',
          engineMissing: 'No s’ha pogut carregar el motor ZIP.',
          creating: 'Creant ZIP...',
          downloaded: 'ZIP descarregat.',
          failed: 'No s’ha pogut crear el ZIP. Revisa els fitxers.'
        },
        step2: {
          title: 'Descarrega el ZIP',
          note: 'Crea el ZIP i es descarregarà automàticament.',
          detail: 'En crear el ZIP es descarregarà un fitxer que pots pujar a Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'Nom del ZIP',
          placeholder: 'el_meu_recurs',
          default: 'el_meu_recurs'
        },
        build: 'Crear i descarregar ZIP',
        html: {
          title: 'No tens fitxers? Enganxa l’HTML',
          note: 'Enganxa l’HTML complet i el visor crearà un ZIP amb un <code>index.html</code> llest per descarregar.',
          placeholder: '<!doctype html>...',
          build: 'Crear ZIP des d’HTML',
          status: {
            ready: 'A punt per crear el ZIP des del teu HTML.',
            reactDetected: 'Aquest contingut sembla React/JSX (no HTML). Copia el prompt i enganxa’l al xat de la teva IA per convertir-lo a HTML.',
            empty: '',
            creating: 'Creant ZIP...',
            downloaded: 'ZIP descarregat.',
            failed: 'No s’ha pogut crear el ZIP. Revisa l’HTML.'
          }
        },
        restrict: {
          title: 'Vols limitar l’accés a un ZIP ja creat?',
          note: 'Puja el teu ZIP i el visor afegirà les restriccions en un fitxer JSON. Després l’hauràs de tornar a pujar a Drive, Dropbox, etc.',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restriccions i descarregar',
          status: {
            ready: 'Selecciona un ZIP per afegir-hi les restriccions.',
            working: 'Aplicant restriccions...',
            done: 'ZIP llest amb restriccions.',
            failed: 'No s’ha pogut modificar el ZIP. Revisa el fitxer.'
          },
          summaryTitle: 'Accés limitat per dates'
        },
        help: {
          inline: 'Si ja has creat un fitxer ZIP i l’has compartit en un servei amb enllaç públic, ves a la secció: “Ja tinc un ZIP o ELPX”.',
          nextStepText: 'El següent pas és pujar i compartir amb enllaç públic el fitxer ZIP o ELPX; quan el tinguis, prem “Continuar”.',
          goTab: 'Següent: “Ja tinc un ZIP o ELPX”'
        }
      },
      html: {
        title: 'Tria l’HTML inicial',
        subtitle: 'No s’ha trobat un index.html. Selecciona el fitxer HTML que vols obrir primer.',
        confirm: 'Fes servir aquest HTML'
      },
      embed: {
        title: 'Inserir en una web',
        subtitle: 'Copia i enganxa aquest codi HTML a la teva web per inserir el recurs.',
        copy: 'Copiar codi',
        fallback: {
          title: 'No es pot obrir incrustat',
          subtitle: 'El teu navegador o la pàgina on s’insereix està bloquejant l’emmagatzematge necessari. Obre el recurs en una pestanya nova.',
          open: 'Obrir en una pestanya nova'
        }
      },
      reactPrompt: {
        title: 'Això sembla React',
        subtitle: 'Aquest contingut sembla React/JSX (no HTML). Copia aquest prompt i enganxa’l al xat de la teva IA perquè el converteixi a HTML.',
        prompt: 'Converteix aquest codi fet en React/JSX en un únic `index.html` que funcioni en obrir-lo directament al navegador (només HTML, CSS i JavaScript). Retorna només el contingut complet del fitxer HTML.',
        copy: 'Copiar prompt'
      },
      about: {
        title: 'Ajuda',
        intro: 'Guia ràpida per publicar, compartir i gestionar recursos al visor.',
        can: {
          title: 'Què pots pujar',
          item1: 'ZIPs amb pàgines web estàtiques i els seus recursos (arxius HTML, imatges, àudio, vídeo, PDF, etc.).',
          item2: 'Materials creats amb eXeLearning o altres eines que exporten a web.',
          item3: 'Qualsevol material creat amb IA (documents, infografies, etc.) que puguis descarregar com a pàgina web (HTML).',
          item4: 'Carpetes amb un HTML principal (normalment <code>index.html</code>).'
        },
        cant: {
          title: 'Què no funciona o pot fallar',
          item1: 'Webs que necessiten servidor (formularis que guarden dades, bases de dades, PHP o similar).',
          item2: 'Enllaços externs que requereixen iniciar sessió o permisos especials.',
          item3: 'ZIPs que no contenen cap fitxer HTML.'
        },
        how: {
          title: 'Com funciona',
          step1: 'Prepara el teu recurs com una carpeta amb pàgines web (HTML) i comprimeix-lo en ZIP. Ho pots fer amb l’opció “Crear un ZIP”.',
          step2: 'Puja el ZIP a un servei amb enllaç públic (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparteix l’arxiu perquè qualsevol amb l’enllaç el pugui veure.',
          step4: 'Copia l’URL i enganxa-la al camp “Enganxa aquí l’enllaç públic”.',
          step5: 'L’enllaç per compartir és permanent, així que el pots distribuir a l’alumnat.'
        },
        drive: {
          title: 'Important sobre Google Drive',
          note: 'Google Drive limita la descàrrega directa d’arxius grans (aprox. 25 MB). Si el teu ZIP supera aquesta mida, pot fallar. Dropbox, Nextcloud i altres serveis solen permetre fitxers més grans sense aquest límit.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Índex d’ajuda">'
          + '<p class="about-index__title">Índex</p>'
          + '<ul>'
          + '<li><a href="#help-que-hace">Què fa aquest visor</a></li>'
          + '<li><a href="#help-como-se-usa">Com s’usa</a></li>'
          + '<li><a href="#help-limitaciones">Limitacions i problemes típics</a></li>'
          + '</ul>'
          + '</nav>'
          + '<section aria-labelledby="help-que-hace">'
          + '<h3 class="about-section-title" id="help-que-hace" tabindex="-1">Què fa aquest visor</h3>'
          + '<p>Obre recursos web empaquetats en <strong>ZIP</strong> o <strong>ELPX</strong> directament al navegador.</p>'
          + '<p>El visor <strong>no puja ni publica</strong> el teu material: només genera un enllaç i l’obre.</p>'
          + '<ul>'
          + '<li><strong>Tu allotges el ZIP</strong> a Drive, Dropbox, Nextcloud, GitHub… amb enllaç públic.</li>'
          + '<li>Cada persona que obre l’enllaç <strong>descarrega el ZIP al seu navegador</strong> i el visor en desa una <strong>còpia local</strong> perquè s’obri més ràpid la propera vegada.</li>'
          + '<li>L’espai i els recursos del gestor són <strong>només d’aquest navegador/dispositiu</strong>. No és un servidor compartit.</li>'
          + '<li><strong>No es desa a GitHub</strong>: GitHub Pages només serveix la pàgina del visor (el programa), no els teus recursos.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Privadesa</strong>: el visor no comparteix automàticament res del teu navegador ni envia els teus recursos a tercers. L’únic extern és la descàrrega del ZIP des de l’enllaç que hagis proporcionat.</p>'
          + '<p class="about-note"><strong>Important</strong>: si l’enllaç al ZIP és públic, qualsevol amb aquest enllaç el podrà descarregar i veure (com amb qualsevol enllaç públic).</p>'
          + '</section>'
          + '<section aria-labelledby="help-como-se-usa">'
          + '<h3 class="about-section-title" id="help-como-se-usa" tabindex="-1">Com s’usa</h3>'
          + '<ol class="about-steps">'
          + '<li>Prepara el recurs com una web estàtica (HTML, CSS, imatges, àudio, vídeo…).</li>'
          + '<li>Tria una ruta: <strong>Crear un ZIP</strong> o <strong>Ja tinc un ZIP o ELPX</strong>.</li>'
          + '<li>Puja el fitxer a un servei amb enllaç públic i comparteix l’enllaç del visor.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-crear" tabindex="-1">Ruta: Crear un ZIP</h4>'
          + '<ol class="about-steps">'
          + '<li>A <strong>Publicar</strong>, entra a <strong>Crear un ZIP</strong>.</li>'
          + '<li>Si no tens fitxers, usa <strong>No tens fitxers? Enganxa l’HTML</strong> i prem <strong>Crear ZIP des d’HTML</strong>.</li>'
          + '<li>Si tens fitxers, obre <strong>Tens fitxers? Crea el ZIP</strong>, afegeix la carpeta o els fitxers i prem <strong>Crear i descarregar ZIP</strong>.</li>'
          + '<li>Si el ZIP no té <code>index.html</code>, el visor et demanarà triar l’HTML inicial.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-tengo" tabindex="-1">Ruta: Ja tinc un ZIP o ELPX</h4>'
          + '<ol class="about-steps">'
          + '<li>A <strong>Publicar</strong>, entra a <strong>Ja tinc un ZIP o ELPX</strong>.</li>'
          + '<li>Enganxa un enllaç públic al fitxer <strong>ZIP</strong> o <strong>ELPX</strong> i prem <strong>Crear enllaç</strong>.</li>'
          + '<li>Fes servir <strong>Copiar enllaç</strong>, <strong>Inserir en una web</strong> o <strong>Obrir vista prèvia</strong> segons el que necessitis.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-visibilidad" tabindex="-1">Visibilitat i accés</h4>'
          + '<p>A <strong>Ajustos</strong> pots limitar quan el recurs serà visible (accés per dates) i quines accions estaran disponibles durant aquest accés.</p>'
          + '<ul>'
          + '<li><strong>Limitar l’accés per dates</strong>: defineix una data i hora d’<strong>Inici</strong> i, si vols, una de <strong>Fi</strong>.</li>'
          + '<li><strong>Accés sense data de fi</strong>: el recurs es mostrarà a partir d’<strong>Inici</strong> sense tancar-se automàticament.</li>'
          + '<li><strong>Accions disponibles durant l’accés</strong>: permet o bloqueja <strong>Compartir</strong>, <strong>Inserir en web</strong> i <strong>Descarregar</strong> des del gestor.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Quan l’accés està tancat</strong>: el visor no mostra el contingut i apareix l’avís d’accés restringit. L’enllaç del visor continua existint, però no permetrà veure el recurs fins que torni a estar dins del període.</p>'
          + '<h4 class="about-subtitle" id="help-gestor" tabindex="-1">Gestor de recursos</h4>'
          + '<p>El gestor et mostra els recursos que has obert i desat <strong>en aquest navegador</strong>.</p>'
          + '<ul>'
          + '<li><strong>Veure</strong>: obre el recurs desat.</li>'
          + '<li><strong>Compartir</strong>: copia l’enllaç del visor per a aquest recurs.</li>'
          + '<li><strong>Inserir en web</strong>: mostra el codi per incrustar-lo (si està permès).</li>'
          + '<li><strong>Editar</strong>: canvia el títol mostrat al gestor.</li>'
          + '<li><strong>Descarregar</strong>: descarrega el fitxer original (ZIP o ELPX).</li>'
          + '<li><strong>Eliminar</strong>: esborra el recurs de l’emmagatzematge local d’aquest navegador.</li>'
          + '</ul>'
          + '<p class="about-note">Nota: si esborres les dades del navegador, fas servir un altre dispositiu o un navegador diferent, aquests recursos poden deixar d’aparèixer.</p>'
          + '</section>'
          + '<section aria-labelledby="help-limitaciones">'
          + '<h3 class="about-section-title" id="help-limitaciones" tabindex="-1">Limitacions i problemes típics</h3>'
          + '<ul>'
          + '<li>Funciona amb webs estàtiques. No funcionarà bé amb webs que necessiten servidor (bases de dades, PHP, formularis que guarden dades…).</li>'
          + '<li>El fitxer ha d’estar en un enllaç públic (sense inici de sessió). Si el servei demana permisos, el visor no el podrà descarregar.</li>'
          + '<li>Si el ZIP no conté HTML, no es podrà obrir. Si falta <code>index.html</code>, hauràs de triar l’HTML inicial.</li>'
          + '<li>Google Drive pot limitar la descàrrega directa de fitxers grans (aprox. 25 MB). Si falla, prova amb Dropbox, Nextcloud o un altre servei.</li>'
          + '</ul>'
          + '</section>'
      },
      error: {
        driveTooLarge: 'El fitxer és massa gran i Google Drive limita les descàrregues. Prova amb Nextcloud, Dropbox o un altre servei.',
        loadZip: 'No s’ha pogut carregar el ZIP.',
        restricted: 'Aquest recurs ja no està disponible per les restriccions de data.',
        embedNotAllowed: 'La inserció en web no està permesa per a aquest recurs.',
        noHtmlSelected: 'No s’ha seleccionat cap HTML.',
        htmlPickerOpen: 'No s’ha pogut obrir el selector d’HTML.',
        serviceWorkerUnavailable: 'Service worker no disponible.',
        sha1Unavailable: 'SHA-1 no disponible en aquest navegador.',
        configMissing: 'Configura GAS_WEBAPP_URL a config.js.',
        needHtmlFile: 'El ZIP necessita com a mínim un fitxer .html.',
        offlineNotAllowed: 'Aquest navegador no permet el visor offline.',
        fflateMissing: 'No s’ha pogut carregar el motor ZIP (fflate).',
        zipNoWebFiles: 'El ZIP no conté fitxers web.',
        noSpace: 'No hi ha prou espai al navegador.'
      },
      status: {
        preparing: 'Preparant...',
        preparingZip: 'Preparant ZIP...',
        connecting: 'Connectant',
        downloadingZip: 'Descarregant ZIP...',
        restrictedReady: 'El recurs està restringit per data. L’enllaç ja està llest.',
        unpacking: 'Descomprimint...',
        saving: 'Desant al navegador...',
        copySuccess: 'Enllaç copiat.'
      },
      common: {
        close: 'Tancar',
        cancel: 'Cancel·lar',
        delete: 'Eliminar'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    gl: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Cargando material',
        message: 'Preparando...',
        eta: 'Tempo estimado de descarga: --',
        etaPrefix: 'Tempo estimado de descarga: ',
        downloadedPrefix: 'Descargado: ',
        note: 'As seguintes veces a visualización será instantánea.'
      },
      header: {
        eyebrow: 'Materiais en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Axuda',
        settings: 'Axustes',
        settingsHint: 'Configura a dispoñibilidade do recurso',
        language: 'Idioma',
        languageHint: 'Cambiar idioma',
        subtitle: 'Comparte os teus recursos educativos desde o teu almacenamento favorito na nube.'
      },
      settings: {
        title: 'Axustes de visibilidade',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por datas',
        restrictHint: 'Aquí podes definir cando estará visible o recurso e que accións estarán dispoñibles no xestor de recursos.',
        restrictToggle: 'Limitar o acceso por datas',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        neverExpires: 'Acceso sen data de fin',
        actionsTitle: 'Accións dispoñibles durante o acceso',
        allowShare: 'Compartir',
        allowEmbed: 'Inserir nunha web',
        allowDownload: 'Descargar'
      },
      restrictionModal: {
        title: 'Acceso restrinxido',
        body: 'Este recurso non está dispoñible neste momento.',
        rangeStart: 'Disponible desde: {date}',
        rangeEnd: 'Ata: {date}',
        rangeNoEnd: 'Sen data de fin',
        countdown: 'Disponible en: {time}'
      },
      lang: {
        label: 'Idioma',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        publish: 'Publicar',
        manager: 'Xestor de recursos'
      },
      publish: {
        title: 'Publicar un recurso',
        subtitle: 'Escolle como queres comezar.',
        back: 'Volver ao inicio',
        zipHelp: {
          summary: 'Que é un ZIP?',
          bodyHtml: 'Un <strong>ZIP</strong> é un ficheiro comprimido que agrupa varios ficheiros (e cartafoles) nun só.'
        },
        htmlHelp: {
          summary: 'Que é o HTML e onde o consigo?',
          bodyHtml: 'O <strong>HTML</strong> é o código dunha páxina web. Se unha IA crea unha web, normalmente dá o código e un botón de “Copiar” para copialo. O ficheiro principal adoita chamarse <code>index.html</code>'
        },
        choice: {
          zipper: {
            title: 'Crear un ZIP',
            note: 'Comeza creando un ZIP desde os teus ficheiros ou desde HTML.',
            restrictHint: 'Tamén podes subir un ZIP para limitar o acceso por datas.'
          },
          main: {
            title: 'Xa teño un ZIP ou ELPX',
            note: 'Pega unha ligazón pública ao ZIP (ou ao ficheiro .elpx de eXeLearning) e xera a ligazón do visor.',
            elpxTooltip: 'Que é ELPX?',
            elpxTooltipHtml: 'Un ficheiro <code>.elpx</code> é un proxecto de eXeLearning. Por dentro é un ZIP, así que o visor pode abrilo.'
          }
        }
      },
      tabs: {
        label: 'Seccións'
      },
      main: {
        subtitle: 'Se xa tes o teu recurso en formato ZIP (ou .elpx de eXeLearning 3+) nun servizo con ligazón pública (Drive, Dropbox, etc.), pega aquí a ligazón para xerar a ligazón do visor.',
        form: {
          title: 'Xa teño un ZIP ou ELPX',
          step: 'Pega a ligazón pública ao ZIP (ou .elpx) e preme “Crear ligazón”.',
          placeholder: 'Pega aquí a ligazón pública do ZIP ou do .elpx',
          submit: 'Crear ligazón'
        },
        output: {
          title: 'Ligazón para compartir',
          step: 'Copia a ligazón ou abre a vista previa.',
          placeholder: 'Ligazón para compartir',
          copy: 'Copiar ligazón',
          qr: 'QR',
          copyTooltip: 'Copiar ligazón',
          qrTooltip: 'QR (ideal para proxectar ou imprimir)',
          embedTooltip: 'Inserir nunha web (xera un iframe listo para pegar)',
          openTooltip: 'Abrir vista previa',
          embed: 'Inserir nunha web',
          open: 'Abrir vista previa'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Outros servizos',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://o-teu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuario/repositorio/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/ficheiro.zip'
      },
      manager: {
        title: 'Recursos gardados',
        subtitle: 'Xestiona o espazo que ocupan os materiais gardados neste navegador.',
        deleteAll: 'Eliminar todos os recursos',
        deleteAllConfirm: 'Seguro que queres eliminar todos os recursos gardados neste navegador? Esta acción non se pode desfacer.',
        deleteAllHelp: 'Borra todos os recursos gardados neste navegador.',
        savedAt: 'Gardado:',
        stats: {
          used: 'Espazo usado',
          total: 'Espazo total',
          count: 'Recursos gardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Data',
          start: 'Inicio',
          size: 'Tamaño',
          dirAsc: 'Ascendente',
          dirDesc: 'Descendente',
          dirHelp: 'Cambiar o sentido de orde.'
        },
        settings: {
          open: 'Axustes de limpeza',
          modalTitle: 'Axustes de limpeza',
          usage: {
            label: 'Límite de uso antes de limpar',
            help: 'Se se supera esta porcentaxe da cota, borraranse os recursos máis antigos.'
          },
          days: {
            label: 'Días para borrar recursos antigos',
            help: 'Se un recurso non se abre neste período, eliminarase automaticamente.',
            suffix: 'días'
          },
          reset: 'Restaurar valores por defecto',
          resetHelp: 'Volver a 70% e 30 días e aplicar a limpeza.'
        },
        actions: {
          view: 'Ver',
          share: 'Compartir',
          qr: 'QR',
          embed: 'Inserir nunha web',
          edit: 'Editar o título',
          download: 'Descargar ficheiro'
        },
        editPrompt: 'Título do recurso',
        empty: 'Non hai recursos gardados neste navegador.',
        siteNoUrl: 'Sitio sen URL',
        noDate: 'sen data'
      },
      badges: {
        scheduled: 'Programado',
        opening: 'Inicio: {date}',
        closing: 'Fin: {date}'
      },
      zipper: {
        title: 'Crear ZIP para o visor',
        accordion: {
          filesTitle: 'Tes ficheiros? Crea o ZIP'
        },
        subtitle: {
          item1: 'Para publicar o teu recurso, garda todos os ficheiros nun cartafol e comprímeo nun ficheiro <strong>.zip</strong>.',
          item2: 'Se o teu recurso está feito con <strong>eXeLearning 3 ou superior</strong>, podes usar directamente o ficheiro <strong>.elpx</strong>.',
          item3: 'Se usas <strong>eXeLearning 2.x</strong>, exporta o proxecto a <strong>ZIP</strong> desde o programa e continúa coa opción <strong>“Xa teño un ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: na versión 3+ podes usar directamente un .elpx (xa é un ZIP). Versión 2.x: Arquivo > Exportar > Sitio web > Arquivo comprimido ZIP. Versión 3.x: Arquivo > Descargar como > Sitio web.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Versión 3+: podes usar directamente o ficheiro <code>.elpx</code> (xa é un ZIP).<br>• Versión 2.x: Arquivo &gt; Exportar &gt; Sitio web &gt; Arquivo comprimido ZIP.<br>• Versión 3.x: Arquivo &gt; Descargar como &gt; Sitio web.'
        },
        step1: {
          title: 'Engade os teus ficheiros',
          note: 'Arrastra o cartafol ou selecciona os ficheiros desde o botón.',
          detail: 'Podes arrastrar un cartafol ou ficheiros. Tamén podes seleccionar un cartafol completo desde o botón.'
        },
        dropzone: {
          title: 'Arrastra aquí o cartafol ou os ficheiros',
          hint: 'Respéctanse os cartafoles internos.',
          folder: 'Escoller cartafol',
          files: 'Escoller ficheiros'
        },
        status: {
          empty: 'Non hai ficheiros seleccionados.',
          filesReady: 'Ficheiros listos: {count}.',
          ready: 'Listo para crear o ZIP.',
          readyHint: 'Prepara o ZIP para obter o teu ficheiro.',
          selectFirst: 'Selecciona ficheiros ou un cartafol primeiro.',
          engineMissing: 'Non se puido cargar o motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado.',
          failed: 'Non se puido crear o ZIP. Revisa os ficheiros.'
        },
        step2: {
          title: 'Descarga o ZIP',
          note: 'Crea o ZIP e descargarase automaticamente.',
          detail: 'Ao crear o ZIP descargarase un ficheiro que podes subir a Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'Nome do ZIP',
          placeholder: 'meu_recurso',
          default: 'meu_recurso'
        },
        build: 'Crear e descargar ZIP',
        html: {
          title: 'Non tes ficheiros? Pega o HTML',
          note: 'Pega o HTML completo e o visor creará un ZIP cun <code>index.html</code> listo para descargar.',
          placeholder: '<!doctype html>...',
          build: 'Crear ZIP desde HTML',
          status: {
            ready: 'Listo para crear el ZIP desde tu HTML.',
            reactDetected: 'Este contido parece React/JSX (non HTML). Copia o prompt e pégao no chat da túa IA para convertelo a HTML.',
            empty: '',
            creating: 'Creando ZIP...',
            downloaded: 'ZIP descargado.',
            failed: 'No se pudo crear el ZIP. Revisa el HTML.'
          }
        },
        restrict: {
          title: 'Queres limitar o acceso a un ZIP xa creado?',
          note: 'Sube o teu ZIP e o visor engadirá as restricións nun ficheiro JSON. Despois terás que volver subilo a Drive, Dropbox, etc.',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restricións e descargar',
          status: {
            ready: 'Selecciona un ZIP para engadir as restricións.',
            working: 'Aplicando restricións...',
            done: 'ZIP listo con restricións.',
            failed: 'Non se puido modificar o ZIP. Revisa o ficheiro.'
          },
          summaryTitle: 'Acceso limitado por datas'
        },
        help: {
          inline: 'Se xa creaches un arquivo ZIP e o compartiches nun servizo con ligazón pública, vai á sección: “Xa teño un ZIP ou ELPX”.',
          nextStepText: 'O seguinte paso é subir e compartir cunha ligazón pública o arquivo ZIP ou ELPX; cando o teñas, preme en “Continuar”.',
          goTab: 'Seguinte: “Xa teño un ZIP ou ELPX”'
        }
      },
      html: {
        title: 'Escolle o HTML inicial',
        subtitle: 'Non se atopou un index.html. Selecciona o ficheiro HTML que queres abrir primeiro.',
        confirm: 'Usar este HTML'
      },
      embed: {
        title: 'Inserir nunha web',
        subtitle: 'Copia e pega este código HTML na túa web para inserir o teu recurso.',
        copy: 'Copiar código',
        fallback: {
          title: 'Non se pode abrir incrustado',
          subtitle: 'O teu navegador ou a páxina onde se insire está bloqueando o almacenamento necesario. Abre o recurso nunha nova lapela.',
          open: 'Abrir nunha nova lapela'
        }
      },
      reactPrompt: {
        title: 'Isto parece React',
        subtitle: 'Este contido parece React/JSX (non HTML). Copia este prompt e pégao no chat da túa IA para que o converta a HTML.',
        prompt: 'Converte este código feito en React/JSX nun único `index.html` que funcione ao abrilo directamente no navegador (só HTML, CSS e JavaScript). Devólveme unicamente o contido completo do arquivo HTML.',
        copy: 'Copiar prompt'
      },
      about: {
        title: 'Axuda',
        intro: 'Guía rápida para publicar, compartir e xestionar recursos no visor.',
        can: {
          title: 'Que podes subir',
          item1: 'ZIPs con páxinas web estáticas e os seus recursos (ficheiros HTML, imaxes, audio, vídeo, PDF, etc.).',
          item2: 'Materiais creados con eXeLearning ou outras ferramentas que exportan a web.',
          item3: 'Calquera material creado con IA (documentos, infografías, etc.) que poidas descargar como páxina web (HTML).',
          item4: 'Cartafoles cun HTML principal (normalmente <code>index.html</code>).'
        },
        cant: {
          title: 'Que non funciona ou pode fallar',
          item1: 'Webs que necesitan servidor (formularios que gardan datos, bases de datos, PHP ou similar).',
          item2: 'Ligazóns externas que requiren iniciar sesión ou permisos especiais.',
          item3: 'ZIPs que non conteñen ningún ficheiro HTML.'
        },
        how: {
          title: 'Como funciona',
          step1: 'Prepara o teu recurso como un cartafol con páxinas web (HTML) e comprímeo en ZIP. Podes facelo coa opción “Crear un ZIP”.',
          step2: 'Sube o ZIP a un servizo con ligazón pública (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparte o ficheiro para que calquera coa ligazón poida velo.',
          step4: 'Copia a URL e pégala no campo “Pega aquí a ligazón pública”.',
          step5: 'A ligazón para compartir é permanente, así que podes distribuíla ao alumnado.'
        },
        drive: {
          title: 'Importante sobre Google Drive',
          note: 'Google Drive limita a descarga directa de ficheiros grandes (aprox. 25 MB). Se o teu ZIP supera ese tamaño, pode fallar. Dropbox, Nextcloud e outros servizos adoitan permitir ficheiros máis grandes sen ese límite.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Índice de axuda">'
          + '<p class="about-index__title">Índice</p>'
          + '<ul>'
          + '<li><a href="#help-que-hace">Que fai este visor</a></li>'
          + '<li><a href="#help-como-se-usa">Como se usa</a></li>'
          + '<li><a href="#help-limitaciones">Limitacións e problemas típicos</a></li>'
          + '</ul>'
          + '</nav>'
          + '<section aria-labelledby="help-que-hace">'
          + '<h3 class="about-section-title" id="help-que-hace" tabindex="-1">Que fai este visor</h3>'
          + '<p>Abre recursos web empaquetados en <strong>ZIP</strong> ou <strong>ELPX</strong> directamente no navegador.</p>'
          + '<p>O visor <strong>non sobe nin publica</strong> o teu material: só xera unha ligazón e ábrea.</p>'
          + '<ul>'
          + '<li><strong>Ti aloxas o ZIP</strong> en Drive, Dropbox, Nextcloud, GitHub… cunha ligazón pública.</li>'
          + '<li>Cada persoa que abre a ligazón <strong>descarga o ZIP no seu navegador</strong> e o visor garda unha <strong>copia local</strong> para que se abra máis rápido a próxima vez.</li>'
          + '<li>O espazo e os recursos do xestor son <strong>só deste navegador/dispositivo</strong>. Non é un servidor compartido.</li>'
          + '<li><strong>Non se garda en GitHub</strong>: GitHub Pages só serve a páxina do visor (o programa), non os teus recursos.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Privacidade</strong>: o visor non comparte automaticamente nada do teu navegador nin envía os teus recursos a terceiros. O único externo é a descarga do ZIP desde a ligazón que proporcionaches.</p>'
          + '<p class="about-note"><strong>Importante</strong>: se a ligazón ao ZIP é pública, calquera con esa ligazón poderá descargalo e velo (igual ca con calquera ligazón pública).</p>'
          + '</section>'
          + '<section aria-labelledby="help-como-se-usa">'
          + '<h3 class="about-section-title" id="help-como-se-usa" tabindex="-1">Como se usa</h3>'
          + '<ol class="about-steps">'
          + '<li>Prepara o recurso como unha web estática (HTML, CSS, imaxes, audio, vídeo…).</li>'
          + '<li>Escolle unha ruta: <strong>Crear un ZIP</strong> ou <strong>Xa teño un ZIP ou ELPX</strong>.</li>'
          + '<li>Sube o ficheiro a un servizo con ligazón pública e comparte a ligazón do visor.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-crear" tabindex="-1">Ruta: Crear un ZIP</h4>'
          + '<ol class="about-steps">'
          + '<li>En <strong>Publicar</strong>, entra en <strong>Crear un ZIP</strong>.</li>'
          + '<li>Se non tes ficheiros, usa <strong>Non tes ficheiros? Pega o HTML</strong> e preme <strong>Crear ZIP desde HTML</strong>.</li>'
          + '<li>Se tes ficheiros, abre <strong>Tes ficheiros? Crea o ZIP</strong>, engade o cartafol ou os ficheiros e preme <strong>Crear e descargar ZIP</strong>.</li>'
          + '<li>Se o ZIP non ten <code>index.html</code>, o visor pedirache escoller o HTML inicial.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-tengo" tabindex="-1">Ruta: Xa teño un ZIP ou ELPX</h4>'
          + '<ol class="about-steps">'
          + '<li>En <strong>Publicar</strong>, entra en <strong>Xa teño un ZIP ou ELPX</strong>.</li>'
          + '<li>Pega unha ligazón pública ao ficheiro <strong>ZIP</strong> ou <strong>ELPX</strong> e preme <strong>Crear ligazón</strong>.</li>'
          + '<li>Usa <strong>Copiar ligazón</strong>, <strong>Inserir nunha web</strong> ou <strong>Abrir vista previa</strong> segundo o que precises.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-visibilidad" tabindex="-1">Visibilidade e acceso</h4>'
          + '<p>En <strong>Axustes</strong> podes limitar cando o recurso estará visible (acceso por datas) e que accións estarán dispoñibles durante ese acceso.</p>'
          + '<ul>'
          + '<li><strong>Limitar o acceso por datas</strong>: define unha data e hora de <strong>Inicio</strong> e, se queres, unha de <strong>Fin</strong>.</li>'
          + '<li><strong>Acceso sen data de fin</strong>: o recurso amosarase a partir de <strong>Inicio</strong> sen pecharse automaticamente.</li>'
          + '<li><strong>Accións dispoñibles durante o acceso</strong>: permite ou bloquea <strong>Compartir</strong>, <strong>Inserir nunha web</strong> e <strong>Descargar</strong> desde o xestor.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Cando o acceso está pechado</strong>: o visor non amosa o contido e aparece o aviso de acceso restrinxido. A ligazón do visor segue existindo, pero non permitirá ver o recurso ata que volva estar dentro do período.</p>'
          + '<h4 class="about-subtitle" id="help-gestor" tabindex="-1">Xestor de recursos</h4>'
          + '<p>O xestor amósache os recursos que abriches e gardaches <strong>neste navegador</strong>.</p>'
          + '<ul>'
          + '<li><strong>Ver</strong>: abre o recurso gardado.</li>'
          + '<li><strong>Compartir</strong>: copia a ligazón do visor para ese recurso.</li>'
          + '<li><strong>Inserir nunha web</strong>: amosa o código para incrustalo (se está permitido).</li>'
          + '<li><strong>Editar</strong>: cambia o título que se amosa no xestor.</li>'
          + '<li><strong>Descargar</strong>: descarga o ficheiro orixinal (ZIP ou ELPX).</li>'
          + '<li><strong>Eliminar</strong>: borra o recurso do almacenamento local deste navegador.</li>'
          + '</ul>'
          + '<p class="about-note">Nota: se borras os datos do navegador, usas outro dispositivo ou un navegador distinto, estes recursos poden deixar de aparecer.</p>'
          + '</section>'
          + '<section aria-labelledby="help-limitaciones">'
          + '<h3 class="about-section-title" id="help-limitaciones" tabindex="-1">Limitacións e problemas típicos</h3>'
          + '<ul>'
          + '<li>Funciona con webs estáticas. Non funcionará ben con webs que precisan servidor (bases de datos, PHP, formularios que gardan datos…).</li>'
          + '<li>O ficheiro debe estar nunha ligazón pública (sen inicio de sesión). Se o servizo pide permisos, o visor non o poderá descargar.</li>'
          + '<li>Se o ZIP non contén HTML, non se poderá abrir. Se falta <code>index.html</code>, terás que escoller o HTML inicial.</li>'
          + '<li>Google Drive pode limitar a descarga directa de ficheiros grandes (aprox. 25 MB). Se falla, proba con Dropbox, Nextcloud ou outro servizo.</li>'
          + '</ul>'
          + '</section>'
      },
      error: {
        driveTooLarge: 'O ficheiro é demasiado grande e Google Drive limita as descargas. Proba con Nextcloud, Dropbox ou outro servizo.',
        loadZip: 'Non se puido cargar o ZIP.',
        restricted: 'Este recurso xa non está dispoñible polas restricións de data.',
        embedNotAllowed: 'A inserción en web non está permitida para este recurso.',
        noHtmlSelected: 'Non se seleccionou ningún HTML.',
        htmlPickerOpen: 'Non se puido abrir o selector de HTML.',
        serviceWorkerUnavailable: 'Service worker non dispoñible.',
        sha1Unavailable: 'SHA-1 non dispoñible neste navegador.',
        configMissing: 'Configura GAS_WEBAPP_URL en config.js.',
        needHtmlFile: 'O ZIP necesita polo menos un ficheiro .html.',
        offlineNotAllowed: 'Este navegador non permite o visor offline.',
        fflateMissing: 'Non se puido cargar o motor ZIP (fflate).',
        zipNoWebFiles: 'O ZIP non contén ficheiros web.',
        noSpace: 'Non hai espazo suficiente no navegador.'
      },
      status: {
        preparing: 'Preparando...',
        preparingZip: 'Preparando ZIP...',
        connecting: 'Conectando',
        downloadingZip: 'Descargando ZIP...',
        restrictedReady: 'O recurso está restrinxido por data. A ligazón xa está lista.',
        unpacking: 'Descomprimindo...',
        saving: 'Gardando no navegador...',
        copySuccess: 'Ligazón copiada.'
      },
      common: {
        close: 'Pechar',
        cancel: 'Cancelar',
        delete: 'Eliminar'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    eu: {
      page: { title: 'Web-ZIP Bisorea' },
      loading: {
        title: 'Materiala kargatzen',
        message: 'Prestatzen...',
        eta: 'Deskargaren denbora estimatua: --',
        etaPrefix: 'Deskargaren denbora estimatua: ',
        downloadedPrefix: 'Deskargatuta: ',
        note: 'Hurrengo aldietan bistaratzea berehalakoa izango da.'
      },
      header: {
        eyebrow: 'ZIP materialen artean',
        title: 'Web-ZIP Bisorea',
        help: 'Laguntza',
        settings: 'Ezarpenak',
        settingsHint: 'Ezarri baliabidearen erabilgarritasuna',
        language: 'Hizkuntza',
        languageHint: 'Hizkuntza aldatu',
        subtitle: 'Partekatu zure hezkuntza-baliabideak hodeiko biltegiratze gogokoenetik.'
      },
      settings: {
        title: 'Ikusgarritasun ezarpenak',
        languageTitle: 'Hizkuntza',
        restrictTitle: 'Sarbidea daten bidez',
        restrictHint: 'Hemen zehaztu dezakezu baliabidea noiz egongo den ikusgai eta zein ekintza egongo diren eskuragarri baliabideen kudeatzailean.',
        restrictToggle: 'Sarbidea daten bidez mugatu',
        startLabel: 'Hasiera',
        endLabel: 'Amaiera',
        neverExpires: 'Amaiera-datarik gabeko sarbidea',
        actionsTitle: 'Sarbidean erabilgarri dauden ekintzak',
        allowShare: 'Partekatu',
        allowEmbed: 'Web batean txertatu',
        allowDownload: 'Deskargatu'
      },
      restrictionModal: {
        title: 'Sarbide mugatua',
        body: 'Baliabidea ez dago eskuragarri une honetan.',
        rangeStart: 'Erabilgarri hemendik: {date}',
        rangeEnd: 'Hona arte: {date}',
        rangeNoEnd: 'Amaiera-datarik gabe',
        countdown: 'Eskuragarri: {time}'
      },
      lang: {
        label: 'Hizkuntza',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        publish: 'Argitaratu',
        manager: 'Baliabide kudeatzailea'
      },
      publish: {
        title: 'Baliabide bat argitaratu',
        subtitle: 'Aukeratu nola hasi nahi duzun.',
        back: 'Hasierara itzuli',
        zipHelp: {
          summary: 'Zer da ZIP bat?',
          bodyHtml: '<strong>ZIP</strong> bat fitxategi konprimatua da: hainbat fitxategi (eta karpeta) fitxategi bakarrean biltzen ditu.'
        },
        htmlHelp: {
          summary: 'Zer da HTMLa eta non lortzen dut?',
          bodyHtml: '<strong>HTML</strong>a web-orri baten kodea da. IA batek web bat sortzen duenean, normalean kodea eta “Kopiatu” botoia ematen du kopiatzeko. Fitxategi nagusia normalean <code>index.html</code> deitzen da'
        },
        choice: {
          zipper: {
            title: 'ZIP bat sortu',
            note: 'Hasi ZIP bat sortzen zure fitxategietatik edo HTMLtik.',
            restrictHint: 'ZIP bat ere igo dezakezu sarbidea daten bidez mugatzeko.'
          },
          main: {
            title: 'ZIP edo ELPX badaukat',
            note: 'Itsatsi ZIParen esteka publikoa (edo eXeLearning-en .elpx fitxategiarena) eta sortu bisorearen esteka.',
            elpxTooltip: 'Zer da ELPX?',
            elpxTooltipHtml: '<code>.elpx</code> fitxategia eXeLearning-en proiektu bat da. Barrutik ZIP bat da; beraz, bisoreak ireki dezake.'
          }
        }
      },
      tabs: {
        label: 'Atalak'
      },
      main: {
        subtitle: 'Zure baliabidea ZIP formatuan (edo eXeLearning 3+eko .elpx) baduzu eta esteka publikoa duen zerbitzu batean badago (Drive, Dropbox, etab.), itsatsi hemen esteka bisorearen esteka sortzeko.',
        form: {
          title: 'ZIP edo ELPX badaukat',
          step: 'Itsatsi ZIParen esteka publikoa (edo .elpx) eta sakatu “Esteka sortu”.',
          placeholder: 'Itsatsi hemen ZIParen edo .elpx fitxategiaren esteka publikoa',
          submit: 'Esteka sortu'
        },
        output: {
          title: 'Partekatze esteka',
          step: 'Kopiatu esteka edo ireki aurrebista.',
          placeholder: 'Partekatze esteka',
          copy: 'Esteka kopiatu',
          qr: 'QR',
          copyTooltip: 'Esteka kopiatu',
          qrTooltip: 'QR (proiektatzeko edo inprimatzeko egokia)',
          embedTooltip: 'Web batean txertatu (itsasteko prest dagoen iframe-a sortzen du)',
          openTooltip: 'Aurrebista ireki',
          embed: 'Web batean txertatu',
          open: 'Aurrebista ireki'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Beste zerbitzuak',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://zure-zerbitzaria/s/...',
        githubPlaceholder: 'https://github.com/erabiltzailea/errepositorioa/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://zerbitzaria.com/fitxategia.zip'
      },
      manager: {
        title: 'Gordetako baliabideak',
        subtitle: 'Kudeatu nabigatzaile honetan gordetako materialen okupazioa.',
        deleteAll: 'Baliabide guztiak ezabatu',
        deleteAllConfirm: 'Ziur zaude nabigatzaile honetan gordetako baliabide guztiak ezabatu nahi dituzula? Ekintza hau ezin da desegin.',
        deleteAllHelp: 'Nabigatzaile honetan gordetako baliabide guztiak ezabatzen ditu.',
        savedAt: 'Gordeta:',
        stats: {
          used: 'Erabilitako espazioa',
          total: 'Guztizko espazioa',
          count: 'Gordetako baliabideak'
        },
        sort: {
          label: 'Ordenatu',
          title: 'Izenburua',
          date: 'Data',
          start: 'Hasiera',
          size: 'Tamaina',
          dirAsc: 'Gorantz',
          dirDesc: 'Beherantz',
          dirHelp: 'Ordena norabidea aldatu.'
        },
        settings: {
          open: 'Garbiketa-ezarpenak',
          modalTitle: 'Garbiketa-ezarpenak',
          usage: {
            label: 'Garbitu aurreko erabilera-muga',
            help: 'Kota-portzentaje hau gainditzen bada, baliabide zaharrenak ezabatuko dira.'
          },
          days: {
            label: 'Baliabide zaharrak ezabatzeko egunak',
            help: 'Baliabide bat epe honetan irekitzen ez bada, automatikoki ezabatuko da.',
            suffix: 'egun'
          },
          reset: 'Lehenetsitako balioak berrezarri',
          resetHelp: '70% eta 30 egunetara itzuli eta garbiketa aplikatu.'
        },
        actions: {
          view: 'Ikusi',
          share: 'Partekatu',
          qr: 'QR',
          embed: 'Web batean txertatu',
          edit: 'Izenburua editatu',
          download: 'Fitxategia deskargatu'
        },
        editPrompt: 'Baliabidearen izenburua',
        empty: 'Ez dago gordetako baliabiderik nabigatzaile honetan.',
        siteNoUrl: 'URLrik gabeko gunea',
        noDate: 'datarik gabe'
      },
      badges: {
        scheduled: 'Programatua',
        opening: 'Hasiera: {date}',
        closing: 'Amaiera: {date}'
      },
      zipper: {
        title: 'Bisorerako ZIP sortu',
        accordion: {
          filesTitle: 'Fitxategiak dituzu? Sortu ZIPa'
        },
        subtitle: {
          item1: 'Zure baliabidea argitaratzeko, gorde fitxategi guztiak karpeta batean eta konprimitu <strong>.zip</strong> fitxategi batean.',
          item2: 'Zure baliabidea <strong>eXeLearning 3 edo goragokoarekin</strong> egina badago, <strong>.elpx</strong> fitxategia zuzenean erabil dezakezu.',
          item3: '<strong>eXeLearning 2.x</strong> erabiltzen baduzu, esportatu proiektua <strong>ZIP</strong>era programatik eta jarraitu <strong>“ZIP bat badaukat”</strong> aukerarekin.'
        },
        exe: {
          tooltip: 'eXeLearning: 3+ bertsioan .elpx zuzenean erabil dezakezu (dagoeneko ZIP bat da). 2.x bertsioa: Fitxategia > Esportatu > Webgunea > ZIP fitxategi konprimatua. 3.x bertsioa: Fitxategia > Deskargatu honela > Webgunea.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• 3+ bertsioa: <code>.elpx</code> fitxategia zuzenean erabil dezakezu (dagoeneko ZIP bat da).<br>• 2.x bertsioa: Fitxategia &gt; Esportatu &gt; Webgunea &gt; ZIP fitxategi konprimatua.<br>• 3.x bertsioa: Fitxategia &gt; Deskargatu honela &gt; Webgunea.'
        },
        step1: {
          title: 'Gehitu zure fitxategiak',
          note: 'Arrastatu karpeta edo hautatu fitxategiak botoitik.',
          detail: 'Karpeta edo fitxategiak arrastatu ditzakezu. Botoitik karpeta osoa ere hauta dezakezu.'
        },
        dropzone: {
          title: 'Arrastatu hona karpeta edo fitxategiak',
          hint: 'Barneko karpetak errespetatzen dira.',
          folder: 'Karpeta aukeratu',
          files: 'Fitxategiak aukeratu'
        },
        status: {
          empty: 'Ez dago hautatutako fitxategirik.',
          filesReady: 'Prest dauden fitxategiak: {count}.',
          ready: 'ZIPa sortzeko prest.',
          readyHint: 'Prestatu ZIPa zure fitxategia eskuratzeko.',
          selectFirst: 'Aukeratu fitxategiak edo karpeta bat lehenik.',
          engineMissing: 'Ezin izan da ZIP motorra kargatu.',
          creating: 'ZIPa sortzen...',
          downloaded: 'ZIPa deskargatuta.',
          failed: 'Ezin izan da ZIPa sortu. Berrikusi fitxategiak.'
        },
        step2: {
          title: 'Deskargatu ZIPa',
          note: 'Sortu ZIPa eta automatikoki deskargatuko da.',
          detail: 'ZIPa sortzean, fitxategi bat deskargatuko da (Drive, Dropbox, Nextcloud, etab. igo dezakezu).'
        },
        zipName: {
          label: 'ZIParen izena',
          placeholder: 'nire_baliabidea',
          default: 'nire_baliabidea'
        },
        build: 'Sortu eta deskargatu ZIPa',
        html: {
          title: 'Ez duzu fitxategirik? Itsatsi HTMLa',
          note: 'Itsatsi HTML osoa eta bisoreak ZIP bat sortuko du, deskargatzeko prest dagoen <code>index.html</code> batekin.',
          placeholder: '<!doctype html>...',
          build: 'HTMLtik ZIPa sortu',
          status: {
            ready: 'Listo para crear el ZIP desde tu HTML.',
            reactDetected: 'Honek React/JSX dirudi (ez HTML). Kopiatu prompta eta itsatsi zure IAren txatean HTMLra bihurtzeko.',
            empty: '',
            creating: 'Creando ZIP...',
            downloaded: 'ZIP descargado.',
            failed: 'No se pudo crear el ZIP. Revisa el HTML.'
          }
        },
        restrict: {
          title: 'ZIP bat jada sortuta badago, sarbidea mugatu nahi?',
          note: 'Igo zure ZIPa eta bisoreak murrizketak JSON fitxategi batean gehituko ditu. Ondoren berriro igo beharko duzu Drive, Dropbox, etab.',
          pick: 'ZIPa hautatu',
          apply: 'Murrizketak aplikatu eta deskargatu',
          status: {
            ready: 'Hautatu ZIP bat murrizketak gehitzeko.',
            working: 'Murrizketak aplikatzen...',
            done: 'ZIPa prest murrizketekin.',
            failed: 'Ezin izan da ZIPa aldatu. Berrikusi fitxategia.'
          },
          summaryTitle: 'Sarbide mugatua daten arabera'
        },
        help: {
          inline: 'ZIP fitxategi bat sortu eta esteka publikoarekin duen zerbitzu batean partekatu baduzu, joan atalera: “ZIP bat badaukat edo ELPX”.',
          nextStepText: 'Hurrengo urratsa ZIP edo ELPX fitxategia esteka publikoarekin igo eta partekatzea da; prest duzunean, sakatu “Jarraitu”.',
          goTab: 'Hurrengoa: “ZIP bat badaukat edo ELPX”'
        }
      },
      html: {
        title: 'Aukeratu hasierako HTMLa',
        subtitle: 'Ez da index.html aurkitu. Hautatu lehenik ireki nahi duzun HTML fitxategia.',
        confirm: 'Erabili HTML hau'
      },
      embed: {
        title: 'Web batean txertatu',
        subtitle: 'Kopiatu eta itsatsi HTML kode hau zure webgunean zure baliabidea txertatzeko.',
        copy: 'Kodea kopiatu',
        fallback: {
          title: 'Ezin da txertatuta ireki',
          subtitle: 'Zure nabigatzailea edo txertatzen den orria beharrezko biltegiratzea blokeatzen ari da. Ireki baliabidea fitxa berri batean.',
          open: 'Fitxa berri batean ireki'
        }
      },
      reactPrompt: {
        title: 'Honek React dirudi',
        subtitle: 'Eduki honek React/JSX dirudi (ez HTML). Kopiatu prompt hau eta itsatsi zure IAren txatean HTMLra bihur dezan.',
        prompt: 'Bihurtu React/JSX-en egindako kode hau `index.html` fitxategi bakarrean, nabigatzailean zuzenean irekitzean funtziona dezan (HTML, CSS eta JavaScript bakarrik). Itzul iezadazu HTML fitxategiaren eduki osoa bakarrik.',
        copy: 'Prompta kopiatu'
      },
      about: {
        title: 'Laguntza',
        intro: 'Bisorean baliabideak argitaratu, partekatu eta kudeatzeko gida azkarra.',
        can: {
          title: 'Zer igo dezakezu',
          item1: 'ZIPak web estatikoekin eta haien baliabideekin (HTML fitxategiak, irudiak, audioa, bideoa, PDF, etab.).',
          item2: 'eXeLearning edo web-era esportatzen duten beste tresna batzuekin sortutako materialak.',
          item3: 'IArekin sortutako edozein material (dokumentuak, infografiak, etab.) HTML orri gisa deskarga dezakezuna.',
          item4: 'HTML nagusi bat duen karpeta (normalean <code>index.html</code>).'
        },
        cant: {
          title: 'Zer ez dabil edo huts egin dezake',
          item1: 'Zerbitzaria behar duten webak (datuak gordetzen dituzten formularioak, datu-baseak, PHP edo antzekoa).',
          item2: 'Saioa hasteko edo baimen bereziak behar dituzten kanpo-estekak.',
          item3: 'HTML fitxategirik ez duten ZIPak.'
        },
        how: {
          title: 'Nola funtzionatzen du',
          step1: 'Prestatu zure baliabidea web-orriak (HTML) dituen karpeta gisa eta ZIPean konprimitu. “ZIP bat sortu” aukerarekin egin dezakezu.',
          step2: 'Igo ZIPa esteka publikoarekin duen zerbitzu batera (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Partekatu fitxategia esteka duen edonork ikus dezan.',
          step4: 'Kopiatu URLa eta itsatsi “Itsatsi hemen esteka publikoa” eremuan.',
          step5: 'Partekatze esteka iraunkorra da, beraz, ikasleekin bana dezakezu.'
        },
        drive: {
          title: 'Google Drive-ri buruzko oharra',
          note: 'Google Drivek fitxategi handien deskarga zuzena mugatzen du (gutxi gorabehera 25 MB). Zure ZIPak tamaina hori gainditzen badu, huts egin dezake. Dropbox, Nextcloud eta beste zerbitzu batzuek, normalean, handiagoak onartzen dituzte muga horik gabe.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Laguntzaren aurkibidea">'
          + '<p class="about-index__title">Aurkibidea</p>'
          + '<ul>'
          + '<li><a href="#help-que-hace">Zer egiten du bisore honek</a></li>'
          + '<li><a href="#help-como-se-usa">Nola erabiltzen da</a></li>'
          + '<li><a href="#help-limitaciones">Mugak eta ohiko arazoak</a></li>'
          + '</ul>'
          + '</nav>'
          + '<section aria-labelledby="help-que-hace">'
          + '<h3 class="about-section-title" id="help-que-hace" tabindex="-1">Zer egiten du bisore honek</h3>'
          + '<p><strong>ZIP</strong> edo <strong>ELPX</strong> fitxategietan paketatutako web-baliabideak zuzenean irekitzen ditu nabigatzailean.</p>'
          + '<p>Bisoreak <strong>ez du zure materiala igotzen ezta argitaratzen ere</strong>: esteka sortu eta ireki besterik ez du egiten.</p>'
          + '<ul>'
          + '<li><strong>Zuk alokatzen duzu ZIPa</strong> Drive, Dropbox, Nextcloud, GitHub… bezalako zerbitzuetan, esteka publikoarekin.</li>'
          + '<li>Esteka irekitzen duen pertsona bakoitzak <strong>ZIPa bere nabigatzailean deskargatzen du</strong>, eta bisoreak <strong>kopia lokal</strong> bat gordetzen du hurrengoan azkarrago irekitzeko.</li>'
          + '<li>Kudeatzaileko espazioa eta baliabideak <strong>nabigatzaile/gailu honetakoak bakarrik</strong> dira. Ez da zerbitzari partekatu bat.</li>'
          + '<li><strong>Ez da GitHuben gordetzen</strong>: GitHub Pages-ek bisorearen orria (programa) bakarrik zerbitzatzen du, ez zure baliabideak.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Pribatutasuna</strong>: bisoreak ez du automatikoki ezer partekatzen zure nabigatzailetik eta ez ditu zure baliabideak hirugarrenei bidaltzen. Kanpokoa bakarrik da ZIPa deskargatzea, zuk emandako estekatik.</p>'
          + '<p class="about-note"><strong>Garrantzitsua</strong>: ZIPerako esteka publikoa bada, esteka hori duen edonork deskargatu eta ikusi ahal izango du (edozein esteka publikorekin bezala).</p>'
          + '</section>'
          + '<section aria-labelledby="help-como-se-usa">'
          + '<h3 class="about-section-title" id="help-como-se-usa" tabindex="-1">Nola erabiltzen da</h3>'
          + '<ol class="about-steps">'
          + '<li>Prestatu baliabidea web estatiko gisa (HTML, CSS, irudiak, audioa, bideoa…).</li>'
          + '<li>Aukeratu ibilbidea: <strong>ZIPa sortu</strong> edo <strong>ZIP edo ELPX badaukat</strong>.</li>'
          + '<li>Igo fitxategia esteka publikoa duen zerbitzu batera eta partekatu bisorearen esteka.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-crear" tabindex="-1">Ibilbidea: ZIPa sortu</h4>'
          + '<ol class="about-steps">'
          + '<li><strong>Argitaratu</strong> atalean, sartu <strong>ZIPa sortu</strong> aukeran.</li>'
          + '<li>Fitxategirik ez baduzu, erabili <strong>Ez duzu fitxategirik? Itsatsi HTMLa</strong> eta sakatu <strong>HTMLtik ZIPa sortu</strong>.</li>'
          + '<li>Fitxategiak badituzu, ireki <strong>Fitxategiak dituzu? Sortu ZIPa</strong>, gehitu karpeta edo fitxategiak eta sakatu <strong>Sortu eta deskargatu ZIPa</strong>.</li>'
          + '<li>ZIParen barruan <code>index.html</code> ez badago, bisoreak HTML hasierakoa aukeratzea eskatuko dizu.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-tengo" tabindex="-1">Ibilbidea: ZIP edo ELPX badaukat</h4>'
          + '<ol class="about-steps">'
          + '<li><strong>Argitaratu</strong> atalean, sartu <strong>ZIP edo ELPX badaukat</strong> aukeran.</li>'
          + '<li>Itsatsi <strong>ZIP</strong> edo <strong>ELPX</strong> fitxategiaren esteka publikoa eta sakatu <strong>Esteka sortu</strong>.</li>'
          + '<li>Erabili <strong>Esteka kopiatu</strong>, <strong>Web batean txertatu</strong> edo <strong>Aurrebista ireki</strong> behar duzunaren arabera.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-visibilidad" tabindex="-1">Ikusgarritasuna eta sarbidea</h4>'
          + '<p><strong>Ezarpenak</strong> atalean, baliabidea noiz egongo den ikusgai (daten araberako sarbidea) eta sarbidean zehar zein ekintza egongo diren erabilgarri konfiguratu dezakezu.</p>'
          + '<ul>'
          + '<li><strong>Sarbidea daten bidez mugatu</strong>: zehaztu <strong>Hasiera</strong> data eta ordua, eta nahi izanez gero <strong>Amaiera</strong> ere.</li>'
          + '<li><strong>Amaiera-datarik gabeko sarbidea</strong>: baliabidea <strong>Hasiera</strong>tik aurrera ikusgai egongo da, automatikoki itxi gabe.</li>'
          + '<li><strong>Sarbidean erabilgarri dauden ekintzak</strong>: kudeatzailetik <strong>Partekatu</strong>, <strong>Web batean txertatu</strong> eta <strong>Deskargatu</strong> baimendu edo blokeatu.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Sarbidea itxita dagoenean</strong>: bisoreak ez du edukia erakusten eta sarbide mugatuaren abisua agertzen da. Bisorearen esteka existitzen jarraitzen du, baina ezin izango da baliabidea ikusi epea berriro ireki arte.</p>'
          + '<h4 class="about-subtitle" id="help-gestor" tabindex="-1">Baliabideen kudeatzailea</h4>'
          + '<p>Kudeatzaileak <strong>nabigatzaile honetan</strong> ireki eta gordetako baliabideak erakusten ditu.</p>'
          + '<ul>'
          + '<li><strong>Ikusi</strong>: gordetako baliabidea irekitzen du.</li>'
          + '<li><strong>Partekatu</strong>: baliabide horren bisorearen esteka kopiatzen du.</li>'
          + '<li><strong>Web batean txertatu</strong>: txertatzeko kodea erakusten du (baimenduta badago).</li>'
          + '<li><strong>Izenburua editatu</strong>: kudeatzailean agertzen den izenburua aldatzen du.</li>'
          + '<li><strong>Fitxategia deskargatu</strong>: jatorrizko fitxategia deskargatzen du (ZIP edo ELPX).</li>'
          + '<li><strong>Ezabatu</strong>: baliabidea nabigatzaile honetako biltegi lokaletik ezabatzen du.</li>'
          + '</ul>'
          + '<p class="about-note">Oharra: nabigatzaileko datuak ezabatzen badituzu, beste gailu bat erabiltzen baduzu edo beste nabigatzaile bat, baliabide hauek desagertu daitezke.</p>'
          + '</section>'
          + '<section aria-labelledby="help-limitaciones">'
          + '<h3 class="about-section-title" id="help-limitaciones" tabindex="-1">Mugak eta ohiko arazoak</h3>'
          + '<ul>'
          + '<li>Web estatikoekin dabil. Ez du ondo funtzionatuko zerbitzaria behar duten webekin (datu-baseak, PHP, datuak gordetzen dituzten formularioak…).</li>'
          + '<li>Fitxategiak esteka publikoan egon behar du (saioa hasi gabe). Zerbitzuak baimenak eskatzen baditu, bisoreak ezin izango du deskargatu.</li>'
          + '<li>ZIParen barruan HTMLrik ez badago, ezin da ireki. <code>index.html</code> falta bada, HTML hasierakoa aukeratu beharko duzu.</li>'
          + '<li>Google Drivek fitxategi handien deskarga zuzena muga dezake (gutxi gorabehera 25 MB). Huts egiten badu, saiatu Dropbox, Nextcloud edo beste zerbitzu batekin.</li>'
          + '</ul>'
          + '</section>'
      },
      error: {
        driveTooLarge: 'Fitxategia handiegia da eta Google Drivek deskargak mugatzen ditu. Saiatu Nextcloud, Dropbox edo beste zerbitzu batekin.',
        loadZip: 'Ezin izan da ZIPa kargatu.',
        restricted: 'Baliabide hau ez dago eskuragarri data-murrizketengatik.',
        embedNotAllowed: 'Web-ean txertatzea ez dago baimenduta baliabide honetarako.',
        noHtmlSelected: 'Ez da HTMLrik hautatu.',
        htmlPickerOpen: 'Ezin izan da HTML hautatzailea ireki.',
        serviceWorkerUnavailable: 'Service worker ez dago erabilgarri.',
        sha1Unavailable: 'SHA-1 ez dago erabilgarri nabigatzaile honetan.',
        configMissing: 'Konfiguratu GAS_WEBAPP_URL config.js fitxategian.',
        needHtmlFile: 'ZIPak gutxienez .html fitxategi bat behar du.',
        offlineNotAllowed: 'Nabigatzaile honek ez du offline bisorea onartzen.',
        fflateMissing: 'Ezin izan da ZIP motorra kargatu (fflate).',
        zipNoWebFiles: 'ZIPak ez dauka web fitxategirik.',
        noSpace: 'Ez dago nahikoa leku nabigatzailean.'
      },
      status: {
        preparing: 'Prestatzen...',
        preparingZip: 'ZIPa prestatzen...',
        connecting: 'Konektatzen',
        downloadingZip: 'ZIPa deskargatzen...',
        restrictedReady: 'Baliabidea dataren arabera mugatuta dago. Esteka prest dago.',
        unpacking: 'Deskonprimatzen...',
        saving: 'Nabigatzailean gordetzen...',
        copySuccess: 'Esteka kopiatuta.'
      },
      common: {
        close: 'Itxi',
        cancel: 'Utzi',
        delete: 'Ezabatu'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    en: {
      page: { title: 'Web-ZIP Viewer' },
      loading: {
        title: 'Loading material',
        message: 'Preparing...',
        eta: 'Estimated download time: --',
        etaPrefix: 'Estimated download time: ',
        downloadedPrefix: 'Downloaded: ',
        note: 'Next times, viewing will be instant.'
      },
      header: {
        eyebrow: 'Materials in ZIP',
        title: 'Web-ZIP Viewer',
        help: 'Help',
        settings: 'Settings',
        settingsHint: 'Set the resource availability',
        language: 'Language',
        languageHint: 'Change language',
        subtitle: 'Share your educational resources from your favorite cloud storage.'
      },
      settings: {
        title: 'Visibility settings',
        languageTitle: 'Language',
        restrictTitle: 'Date access',
        restrictHint: 'Here you can define when the resource will be visible and which actions will be available in the resource manager.',
        restrictToggle: 'Limit access by dates',
        startLabel: 'Start',
        endLabel: 'End',
        neverExpires: 'Access with no end date',
        actionsTitle: 'Actions available during access',
        allowShare: 'Share',
        allowEmbed: 'Embed',
        allowDownload: 'Download'
      },
      restrictionModal: {
        title: 'Access restricted',
        body: 'This resource is not available right now.',
        rangeStart: 'Available from: {date}',
        rangeEnd: 'Until: {date}',
        rangeNoEnd: 'No end date',
        countdown: 'Available in: {time}'
      },
      lang: {
        label: 'Language',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        publish: 'Publish',
        manager: 'Resource manager'
      },
      publish: {
        title: 'Publish a resource',
        subtitle: 'Choose how you want to start.',
        back: 'Back to start',
        zipHelp: {
          summary: 'What is a ZIP?',
          bodyHtml: 'A <strong>ZIP</strong> is a compressed file that bundles multiple files (and folders) into one.'
        },
        htmlHelp: {
          summary: 'What is HTML and where do I get it?',
          bodyHtml: '<strong>HTML</strong> is the code of a web page. If an AI creates a website, it usually provides the code and a “Copy” button so you can copy it. The main file is usually called <code>index.html</code>'
        },
        choice: {
          zipper: {
            title: 'Create a ZIP',
            note: 'Start by creating a ZIP from your files or from HTML.',
            restrictHint: 'You can also upload a ZIP to limit access by dates.'
          },
          main: {
            title: 'I already have a ZIP or ELPX',
            note: 'Paste a public link to the ZIP (or an eXeLearning .elpx file) and generate the viewer link.',
            elpxTooltip: 'What is ELPX?',
            elpxTooltipHtml: 'An <code>.elpx</code> file is an eXeLearning project. It’s a ZIP internally, so the viewer can open it.'
          }
        }
      },
      tabs: {
        label: 'Sections'
      },
      main: {
        subtitle: 'If your resource is already a ZIP (or an eXeLearning 3+ .elpx file) hosted on a public link service (Drive, Dropbox, etc.), paste the link here to generate the viewer link.',
        form: {
          title: 'I already have a ZIP or ELPX',
          step: 'Paste the public ZIP link (or .elpx) and click “Create link”.',
          placeholder: 'Paste the public ZIP or .elpx link here',
          submit: 'Create link'
        },
        output: {
          title: 'Shareable link',
          step: 'Copy the link or open the preview.',
          placeholder: 'Shareable link',
          copy: 'Copy link',
          qr: 'QR',
          copyTooltip: 'Copy link',
          qrTooltip: 'QR (great for projecting or printing)',
          embedTooltip: 'Embed in a website (generates an iframe ready to paste)',
          openTooltip: 'Open preview',
          embed: 'Embed in a website',
          open: 'Open preview'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Other services',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://your-server/s/...',
        githubPlaceholder: 'https://github.com/user/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://server.com/file.zip'
      },
      manager: {
        title: 'Saved resources',
        subtitle: 'Manage the space used by materials stored in this browser.',
        deleteAll: 'Delete all resources',
        deleteAllConfirm: 'Are you sure you want to delete all resources saved in this browser? This action cannot be undone.',
        deleteAllHelp: 'Deletes all resources saved in this browser.',
        savedAt: 'Saved:',
        stats: {
          used: 'Space used',
          total: 'Total space',
          count: 'Saved resources'
        },
        sort: {
          label: 'Sort by',
          title: 'Title',
          date: 'Date',
          start: 'Start',
          size: 'Size',
          dirAsc: 'Ascending',
          dirDesc: 'Descending',
          dirHelp: 'Change sort direction.'
        },
        settings: {
          open: 'Cleanup settings',
          modalTitle: 'Cleanup settings',
          usage: {
            label: 'Usage limit before cleanup',
            help: 'If this percentage of the quota is exceeded, the oldest resources are deleted.'
          },
          days: {
            label: 'Days before removing old resources',
            help: 'If a resource is not opened within this period, it will be removed automatically.',
            suffix: 'days'
          },
          reset: 'Restore default values',
          resetHelp: 'Back to 70% and 30 days and apply cleanup.'
        },
        actions: {
          view: 'View',
          share: 'Share',
          qr: 'QR',
          embed: 'Embed in a website',
          edit: 'Edit title',
          download: 'Download file'
        },
        editPrompt: 'Resource title',
        empty: 'No saved resources in this browser.',
        siteNoUrl: 'Site without URL',
        noDate: 'no date'
      },
      badges: {
        scheduled: 'Scheduled',
        opening: 'Start: {date}',
        closing: 'End: {date}'
      },
      zipper: {
        title: 'Create ZIP for the viewer',
        accordion: {
          filesTitle: 'Have files? Create the ZIP'
        },
        subtitle: {
          item1: 'To publish your resource, put all files in a folder and compress it into a <strong>.zip</strong> file.',
          item2: 'If your resource was made with <strong>eXeLearning 3 or later</strong>, you can use the <strong>.elpx</strong> file directly.',
          item3: 'If you use <strong>eXeLearning 2.x</strong>, export the project to <strong>ZIP</strong> from the program and continue with <strong>“I already have a ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: in version 3+ you can use a .elpx directly (it’s already a ZIP). Version 2.x: File > Export > Website > Compressed ZIP file. Version 3.x: File > Download as > Website.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Version 3+: you can use the <code>.elpx</code> file directly (it’s already a ZIP).<br>• Version 2.x: File &gt; Export &gt; Website &gt; Compressed ZIP file.<br>• Version 3.x: File &gt; Download as &gt; Website.'
        },
        step1: {
          title: 'Add your files',
          note: 'Drag the folder or select files using the buttons.',
          detail: 'You can drag a folder or files. You can also select a full folder from the button.'
        },
        dropzone: {
          title: 'Drop the folder or files here',
          hint: 'Internal folders are preserved.',
          folder: 'Choose folder',
          files: 'Choose files'
        },
        status: {
          empty: 'No files selected.',
          filesReady: 'Files ready: {count}.',
          ready: 'Ready to create the ZIP.',
          readyHint: 'Prepare the ZIP to get your file.',
          selectFirst: 'Select files or a folder first.',
          engineMissing: 'ZIP engine could not be loaded.',
          creating: 'Creating ZIP...',
          downloaded: 'ZIP downloaded.',
          failed: 'Could not create the ZIP. Check the files.'
        },
        step2: {
          title: 'Download the ZIP',
          note: 'Create the ZIP and it will download automatically.',
          detail: 'When you create the ZIP, a file will download that you can upload to Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'ZIP name',
          placeholder: 'my_resource',
          default: 'my_resource'
        },
        build: 'Create and download ZIP',
        html: {
          title: 'No files? Paste the HTML',
          note: 'Paste the full HTML and the viewer will create a ZIP with an <code>index.html</code> ready to download.',
          placeholder: '<!doctype html>...',
          build: 'Create ZIP from HTML',
          status: {
            ready: 'Ready to create the ZIP from your HTML.',
            reactDetected: 'This content looks like React/JSX (not HTML). Copy the prompt and paste it into your AI chat to convert it to HTML.',
            empty: '',
            creating: 'Creating ZIP...',
            downloaded: 'ZIP downloaded.',
            failed: 'Could not create the ZIP. Check the HTML.'
          }
        },
        restrict: {
          title: 'Want to limit access to an existing ZIP?',
          note: 'Upload your ZIP and the viewer will add restrictions in a JSON file. Then upload it again to Drive, Dropbox, etc.',
          pick: 'Select ZIP',
          apply: 'Apply restrictions and download',
          status: {
            ready: 'Select a ZIP to add restrictions.',
            working: 'Applying restrictions...',
            done: 'ZIP ready with restrictions.',
            failed: 'Could not modify the ZIP. Check the file.'
          },
          
          summaryTitle: 'Access limited by dates'
        },
        help: {
          inline: 'If you already created a ZIP file and shared it on a service with a public link, go to: “I already have a ZIP or ELPX”.',
          nextStepText: 'The next step is to upload and share the ZIP or ELPX file with a public link; once you have it, click “Continue”.',
          goTab: 'Next: “I already have a ZIP or ELPX”'
        }
      },
      html: {
        title: 'Choose the initial HTML',
        subtitle: 'index.html was not found. Select the HTML file you want to open first.',
        confirm: 'Use this HTML'
      },
      embed: {
        title: 'Embed in a website',
        subtitle: 'Copy and paste this HTML code into your website to embed your resource.',
        copy: 'Copy code',
        fallback: {
          title: 'Cannot open embedded',
          subtitle: 'Your browser or the host page is blocking the required storage. Open the resource in a new tab.',
          open: 'Open in a new tab'
        }
      },
      reactPrompt: {
        title: 'This looks like React',
        subtitle: 'This content looks like React/JSX (not HTML). Copy this prompt and paste it into your AI chat so it converts it to HTML.',
        prompt: 'Convert this React/JSX code into a single `index.html` that works when opened directly in the browser (only HTML, CSS and JavaScript). Return only the full contents of the HTML file.',
        copy: 'Copy prompt'
      },
      about: {
        title: 'Help',
        intro: 'Quick guide to publish, share, and manage resources in the viewer.',
        can: {
          title: 'What you can upload',
          item1: 'ZIPs with static web pages and their assets (HTML files, images, audio, video, PDF, etc.).',
          item2: 'Materials created with eXeLearning or other tools that export to web.',
          item3: 'Any AI-created material (documents, infographics, etc.) that you can download as a web page (HTML).',
          item4: 'Folders with a main HTML file (usually <code>index.html</code>).'
        },
        cant: {
          title: 'What does not work or may fail',
          item1: 'Webs that require a server (forms that save data, databases, PHP, etc.).',
          item2: 'External links that require login or special permissions.',
          item3: 'ZIPs that do not contain any HTML file.'
        },
        how: {
          title: 'How it works',
          step1: 'Prepare your resource as a folder with web pages (HTML) and compress it into a ZIP. You can do this with the “Create a ZIP” option.',
          step2: 'Upload the ZIP to a service with a public link (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Share the file so anyone with the link can view it.',
          step4: 'Copy the URL and paste it into the “Paste the public link here” field.',
          step5: 'The share link is permanent, so you can distribute it to your students.'
        },
        drive: {
          title: 'Important about Google Drive',
          note: 'Google Drive limits direct downloads of large files (approx. 25 MB). If your ZIP exceeds that size, it may fail. Dropbox, Nextcloud and other services usually allow larger files without that limit.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Help index">'
          + '<p class="about-index__title">Index</p>'
          + '<ul>'
          + '<li><a href="#help-que-hace">What this viewer does</a></li>'
          + '<li><a href="#help-como-se-usa">How to use it</a></li>'
          + '<li><a href="#help-limitaciones">Limitations and common issues</a></li>'
          + '</ul>'
          + '</nav>'
          + '<section aria-labelledby="help-que-hace">'
          + '<h3 class="about-section-title" id="help-que-hace" tabindex="-1">What this viewer does</h3>'
          + '<p>Opens web resources packaged as <strong>ZIP</strong> or <strong>ELPX</strong> directly in the browser.</p>'
          + '<p>The viewer <strong>does not upload or publish</strong> your content: it only generates a link and opens it.</p>'
          + '<ul>'
          + '<li><strong>You host the ZIP</strong> on Drive, Dropbox, Nextcloud, GitHub… with a public link.</li>'
          + '<li>Each person who opens the link <strong>downloads the ZIP in their browser</strong>, and the viewer stores a <strong>local copy</strong> so it opens faster next time.</li>'
          + '<li>The manager’s storage and resources are <strong>only for this browser/device</strong>. It is not a shared server.</li>'
          + '<li><strong>Nothing is stored on GitHub</strong>: GitHub Pages only serves the viewer page (the program), not your resources.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Privacy</strong>: the viewer does not automatically share anything from your browser or send your resources to third parties. The only external action is downloading the ZIP from the link you provided.</p>'
          + '<p class="about-note"><strong>Important</strong>: if the ZIP link is public, anyone with that link can download it and view it (as with any public link).</p>'
          + '</section>'
          + '<section aria-labelledby="help-como-se-usa">'
          + '<h3 class="about-section-title" id="help-como-se-usa" tabindex="-1">How to use it</h3>'
          + '<ol class="about-steps">'
          + '<li>Prepare your resource as a static website (HTML, CSS, images, audio, video…).</li>'
          + '<li>Choose a path: <strong>Create a ZIP</strong> or <strong>I already have a ZIP or ELPX</strong>.</li>'
          + '<li>Upload the file to a public-link service and share the viewer link.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-crear" tabindex="-1">Path: Create a ZIP</h4>'
          + '<ol class="about-steps">'
          + '<li>In <strong>Publish</strong>, open <strong>Create a ZIP</strong>.</li>'
          + '<li>If you have no files, use <strong>No files? Paste the HTML</strong> and click <strong>Create ZIP from HTML</strong>.</li>'
          + '<li>If you have files, open <strong>Have files? Create the ZIP</strong>, add the folder/files and click <strong>Create and download ZIP</strong>.</li>'
          + '<li>If your ZIP does not include <code>index.html</code>, the viewer will ask you to choose the initial HTML.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-tengo" tabindex="-1">Path: I already have a ZIP or ELPX</h4>'
          + '<ol class="about-steps">'
          + '<li>In <strong>Publish</strong>, open <strong>I already have a ZIP or ELPX</strong>.</li>'
          + '<li>Paste a public link to the <strong>ZIP</strong> or <strong>ELPX</strong> file and click <strong>Create link</strong>.</li>'
          + '<li>Use <strong>Copy link</strong>, <strong>Embed in a website</strong>, or <strong>Open preview</strong> depending on what you need.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-visibilidad" tabindex="-1">Visibility and access</h4>'
          + '<p>In <strong>Settings</strong> you can define when the resource is visible (date access) and which actions are available during that access.</p>'
          + '<ul>'
          + '<li><strong>Limit access by dates</strong>: set a <strong>Start</strong> date/time and, if you want, an <strong>End</strong>.</li>'
          + '<li><strong>Access with no end date</strong>: the resource will be visible from <strong>Start</strong> without closing automatically.</li>'
          + '<li><strong>Actions available during access</strong>: allow or block <strong>Share</strong>, <strong>Embed</strong>, and <strong>Download</strong> from the manager.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>When access is closed</strong>: the viewer does not show the content and displays the restricted-access message. The viewer link still exists, but it won’t let you view the resource until the access window is open again.</p>'
          + '<h4 class="about-subtitle" id="help-gestor" tabindex="-1">Resource manager</h4>'
          + '<p>The manager shows resources you opened and saved <strong>in this browser</strong>.</p>'
          + '<ul>'
          + '<li><strong>View</strong>: opens the saved resource.</li>'
          + '<li><strong>Share</strong>: copies the viewer link for that resource.</li>'
          + '<li><strong>Embed</strong>: shows the embed code (if allowed).</li>'
          + '<li><strong>Edit</strong>: changes the title shown in the manager.</li>'
          + '<li><strong>Download</strong>: downloads the original file (ZIP or ELPX).</li>'
          + '<li><strong>Delete</strong>: removes the resource from this browser’s local storage.</li>'
          + '</ul>'
          + '<p class="about-note">Note: if you clear browser storage, switch devices, or use a different browser, these resources may no longer appear.</p>'
          + '</section>'
          + '<section aria-labelledby="help-limitaciones">'
          + '<h3 class="about-section-title" id="help-limitaciones" tabindex="-1">Limitations and common issues</h3>'
          + '<ul>'
          + '<li>Works with static websites. It won’t work well with sites that require a server (databases, PHP, forms that save data…).</li>'
          + '<li>The file must be on a public link (no login). If the service requires permissions, the viewer won’t be able to download it.</li>'
          + '<li>If the ZIP contains no HTML, it can’t be opened. If <code>index.html</code> is missing, you’ll need to choose the initial HTML.</li>'
          + '<li>Google Drive may limit direct downloads for large files (approx. 25 MB). If it fails, try Dropbox, Nextcloud, or another service.</li>'
          + '</ul>'
          + '</section>'
      },
      error: {
        driveTooLarge: 'The file is too large and Google Drive limits downloads. Try Nextcloud, Dropbox, or another service.',
        loadZip: 'Could not load the ZIP.',
        restricted: 'This resource is no longer available due to date restrictions.',
        embedNotAllowed: 'Embedding is not allowed for this resource.',
        noHtmlSelected: 'No HTML selected.',
        htmlPickerOpen: 'Could not open the HTML selector.',
        serviceWorkerUnavailable: 'Service worker not available.',
        sha1Unavailable: 'SHA-1 not available in this browser.',
        configMissing: 'Set GAS_WEBAPP_URL in config.js.',
        needHtmlFile: 'The ZIP needs at least one .html file.',
        offlineNotAllowed: 'This browser does not allow offline viewer.',
        fflateMissing: 'Could not load ZIP engine (fflate).',
        zipNoWebFiles: 'The ZIP does not contain web files.',
        noSpace: 'Not enough space in the browser.'
      },
      status: {
        preparing: 'Preparing...',
        preparingZip: 'Preparing ZIP...',
        connecting: 'Connecting',
        downloadingZip: 'Downloading ZIP...',
        restrictedReady: 'This resource is date-restricted. The link is ready.',
        unpacking: 'Unpacking...',
        saving: 'Saving in the browser...',
        copySuccess: 'Link copied.'
      },
      common: {
        close: 'Close',
        cancel: 'Cancel',
        delete: 'Delete'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    de: {
      page: { title: 'Web-ZIP-Viewer' },
      loading: {
        title: 'Material wird geladen',
        message: 'Vorbereiten...',
        eta: 'Geschätzte Downloadzeit: --',
        etaPrefix: 'Geschätzte Downloadzeit: ',
        downloadedPrefix: 'Heruntergeladen: ',
        note: 'Danach ist die Anzeige beim nächsten Mal sofort.'
      },
      header: {
        eyebrow: 'Materialien im ZIP',
        title: 'Web-ZIP-Viewer',
        help: 'Hilfe',
        settings: 'Einstellungen',
        settingsHint: 'Verfügbarkeit des Materials einstellen',
        language: 'Sprache',
        languageHint: 'Sprache ändern',
        subtitle: 'Teile deine Bildungsressourcen aus deinem bevorzugten Cloud-Speicher.'
      },
      settings: {
        title: 'Sichtbarkeitseinstellungen',
        languageTitle: 'Sprache',
        restrictTitle: 'Zugriff nach Datum',
        restrictHint: 'Hier kannst du festlegen, wann die Ressource sichtbar ist und welche Aktionen im Ressourcenmanager verfügbar sind.',
        restrictToggle: 'Zugriff nach Datum begrenzen',
        startLabel: 'Start',
        endLabel: 'Ende',
        neverExpires: 'Zugriff ohne Enddatum',
        actionsTitle: 'Aktionen während des Zugriffs',
        allowShare: 'Teilen',
        allowEmbed: 'Einbetten',
        allowDownload: 'Herunterladen'
      },
      restrictionModal: {
        title: 'Zugriff eingeschränkt',
        body: 'Diese Ressource ist im Moment nicht verfügbar.',
        rangeStart: 'Verfügbar ab: {date}',
        rangeEnd: 'Bis: {date}',
        rangeNoEnd: 'Kein Enddatum',
        countdown: 'Verfügbar in: {time}'
      },
      lang: {
        label: 'Sprache',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        publish: 'Veröffentlichen',
        manager: 'Ressourcenverwaltung'
      },
      publish: {
        title: 'Ressource veröffentlichen',
        subtitle: 'Wähle, wie du starten möchtest.',
        back: 'Zurück zum Start',
        zipHelp: {
          summary: 'Was ist eine ZIP-Datei?',
          bodyHtml: 'Eine <strong>ZIP</strong>-Datei ist ein komprimiertes Archiv, das mehrere Dateien (und Ordner) in einer Datei bündelt.'
        },
        htmlHelp: {
          summary: 'Was ist HTML und woher bekomme ich es?',
          bodyHtml: '<strong>HTML</strong> ist der Code einer Webseite. Wenn eine KI eine Webseite erstellt, liefert sie meist den Code und eine Schaltfläche „Kopieren“, um ihn zu kopieren. Die Hauptdatei heißt meistens <code>index.html</code>'
        },
        choice: {
          zipper: {
            title: 'ZIP erstellen',
            note: 'Starte, indem du ein ZIP aus deinen Dateien oder aus HTML erstellst.',
            restrictHint: 'Du kannst auch ein ZIP hochladen, um den Zugriff zeitlich zu begrenzen.'
          },
          main: {
            title: 'Ich habe bereits ein ZIP oder ELPX',
            note: 'Füge einen öffentlichen Link zur ZIP-Datei (oder zu einer eXeLearning-.elpx-Datei) ein und erzeuge den Viewer-Link.',
            elpxTooltip: 'Was ist ELPX?',
            elpxTooltipHtml: 'Eine <code>.elpx</code>-Datei ist ein eXeLearning-Projekt. Intern ist sie ein ZIP, daher kann der Viewer sie öffnen.'
          }
        }
      },
      tabs: {
        label: 'Abschnitte'
      },
      main: {
        subtitle: 'Wenn deine Ressource bereits als ZIP (oder als eXeLearning-3+-.elpx-Datei) mit öffentlichem Link verfügbar ist (Drive, Dropbox usw.), füge den Link hier ein, um den Viewer-Link zu erzeugen.',
        form: {
          title: 'Ich habe bereits ein ZIP oder ELPX',
          step: 'Füge den öffentlichen Link zur ZIP-Datei (oder .elpx) ein und klicke auf „Link erstellen“.',
          placeholder: 'Füge hier den öffentlichen ZIP- oder .elpx-Link ein',
          submit: 'Link erstellen'
        },
        output: {
          title: 'Link zum Teilen',
          step: 'Kopiere den Link oder öffne die Vorschau.',
          placeholder: 'Link zum Teilen',
          copy: 'Link kopieren',
          qr: 'QR',
          copyTooltip: 'Link kopieren',
          qrTooltip: 'QR (ideal zum Projizieren oder Drucken)',
          embedTooltip: 'In Website einbetten (erstellt ein fertiges iframe zum Einfügen)',
          openTooltip: 'Vorschau öffnen',
          embed: 'In Website einbetten',
          open: 'Vorschau öffnen'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Andere Dienste',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://dein-server/s/...',
        githubPlaceholder: 'https://github.com/benutzer/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://server.com/datei.zip'
      },
      manager: {
        title: 'Gespeicherte Ressourcen',
        subtitle: 'Verwalte den Speicherplatz der in diesem Browser gespeicherten Materialien.',
        deleteAll: 'Alle Ressourcen löschen',
        deleteAllConfirm: 'Möchtest du wirklich alle in diesem Browser gespeicherten Ressourcen löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
        deleteAllHelp: 'Löscht alle in diesem Browser gespeicherten Ressourcen.',
        savedAt: 'Gespeichert:',
        stats: {
          used: 'Belegter Speicher',
          total: 'Gesamtspeicher',
          count: 'Gespeicherte Ressourcen'
        },
        sort: {
          label: 'Sortieren nach',
          title: 'Titel',
          date: 'Datum',
          start: 'Beginn',
          size: 'Größe',
          dirAsc: 'Aufsteigend',
          dirDesc: 'Absteigend',
          dirHelp: 'Sortierreihenfolge wechseln.'
        },
        settings: {
          open: 'Bereinigungseinstellungen',
          modalTitle: 'Bereinigungseinstellungen',
          usage: {
            label: 'Nutzungsgrenze vor Bereinigung',
            help: 'Wenn dieser Prozentsatz der Quote überschritten wird, werden die ältesten Ressourcen gelöscht.'
          },
          days: {
            label: 'Tage bis zum Löschen alter Ressourcen',
            help: 'Wenn eine Ressource in diesem Zeitraum nicht geöffnet wird, wird sie automatisch gelöscht.',
            suffix: 'Tage'
          },
          reset: 'Standardwerte wiederherstellen',
          resetHelp: 'Zurück zu 70% und 30 Tagen und Bereinigung anwenden.'
        },
        actions: {
          view: 'Ansehen',
          share: 'Teilen',
          qr: 'QR',
          embed: 'In eine Website einbetten',
          edit: 'Titel bearbeiten',
          download: 'Datei herunterladen'
        },
        editPrompt: 'Titel der Ressource',
        empty: 'Keine gespeicherten Ressourcen in diesem Browser.',
        siteNoUrl: 'Website ohne URL',
        noDate: 'ohne Datum'
      },
      badges: {
        scheduled: 'Geplant',
        opening: 'Beginn: {date}',
        closing: 'Ende: {date}'
      },
      zipper: {
        title: 'ZIP für den Viewer erstellen',
        accordion: {
          filesTitle: 'Dateien vorhanden? ZIP erstellen'
        },
        subtitle: {
          item1: 'Um deine Ressource zu veröffentlichen, lege alle Dateien in einen Ordner und komprimiere ihn zu einer <strong>.zip</strong>-Datei.',
          item2: 'Wenn deine Ressource mit <strong>eXeLearning 3 oder höher</strong> erstellt wurde, kannst du die <strong>.elpx</strong>-Datei direkt verwenden.',
          item3: 'Wenn du <strong>eXeLearning 2.x</strong> nutzt, exportiere das Projekt als <strong>ZIP</strong> aus dem Programm und fahre mit der Option <strong>„Ich habe bereits ein ZIP“</strong> fort.'
        },
        exe: {
          tooltip: 'eXeLearning: In Version 3+ kannst du eine .elpx direkt verwenden (sie ist bereits ein ZIP). Version 2.x: Datei > Exportieren > Website > Komprimierte ZIP-Datei. Version 3.x: Datei > Herunterladen als > Website.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Version 3+: Du kannst die <code>.elpx</code>-Datei direkt verwenden (sie ist bereits ein ZIP).<br>• Version 2.x: Datei &gt; Exportieren &gt; Website &gt; Komprimierte ZIP-Datei.<br>• Version 3.x: Datei &gt; Herunterladen als &gt; Website.'
        },
        step1: {
          title: 'Dateien hinzufügen',
          note: 'Ziehe den Ordner hierher oder wähle Dateien per Button.',
          detail: 'Du kannst einen Ordner oder Dateien ziehen. Du kannst auch einen gesamten Ordner über den Button wählen.'
        },
        dropzone: {
          title: 'Ordner oder Dateien hier ablegen',
          hint: 'Interne Ordner bleiben erhalten.',
          folder: 'Ordner wählen',
          files: 'Dateien wählen'
        },
        status: {
          empty: 'Keine Dateien ausgewählt.',
          filesReady: 'Dateien bereit: {count}.',
          ready: 'Bereit zum Erstellen des ZIP.',
          readyHint: 'Bereite das ZIP vor, um deine Datei zu erhalten.',
          selectFirst: 'Wähle zuerst Dateien oder einen Ordner aus.',
          engineMissing: 'ZIP-Engine konnte nicht geladen werden.',
          creating: 'ZIP wird erstellt...',
          downloaded: 'ZIP heruntergeladen.',
          failed: 'ZIP konnte nicht erstellt werden. Prüfe die Dateien.'
        },
        step2: {
          title: 'ZIP herunterladen',
          note: 'Erstelle das ZIP, es wird automatisch heruntergeladen.',
          detail: 'Beim Erstellen des ZIP wird eine Datei heruntergeladen, die du bei Drive, Dropbox, Nextcloud usw. hochladen kannst.'
        },
        zipName: {
          label: 'ZIP-Name',
          placeholder: 'mein_ressource',
          default: 'mein_ressource'
        },
        build: 'ZIP erstellen und herunterladen',
        html: {
          title: 'Keine Dateien? HTML einfügen',
          note: 'Füge das vollständige HTML ein und der Viewer erstellt ein ZIP mit einer <code>index.html</code>, das sofort heruntergeladen werden kann.',
          placeholder: '<!doctype html>...',
          build: 'ZIP aus HTML erstellen',
          status: {
            ready: 'Bereit, ein ZIP aus deinem HTML zu erstellen.',
            reactDetected: 'Dieser Inhalt sieht nach React/JSX aus (nicht HTML). Kopiere den Prompt und füge ihn in deinen KI-Chat ein, um ihn in HTML umzuwandeln.',
            empty: '',
            creating: 'ZIP wird erstellt...',
            downloaded: 'ZIP heruntergeladen.',
            failed: 'ZIP konnte nicht erstellt werden. Prüfe das HTML.'
          }
        },
        restrict: {
          title: 'Zugriff auf ein vorhandenes ZIP begrenzen?',
          note: 'Lade dein ZIP hoch und der Viewer fügt die Einschränkungen in einer JSON-Datei hinzu. Danach musst du es erneut zu Drive, Dropbox usw. hochladen.',
          pick: 'ZIP auswählen',
          apply: 'Einschränkungen anwenden und herunterladen',
          status: {
            ready: 'Wähle ein ZIP, um Einschränkungen hinzuzufügen.',
            working: 'Einschränkungen werden angewendet...',
            done: 'ZIP ist mit Einschränkungen bereit.',
            failed: 'ZIP konnte nicht geändert werden. Prüfe die Datei.'
          },
          
          summaryTitle: 'Zugriff zeitlich begrenzt'
        },
        help: {
          inline: 'Wenn du bereits eine ZIP-Datei erstellt und sie über einen Dienst mit öffentlichem Link geteilt hast, gehe zu: „Ich habe bereits ein ZIP oder ELPX“.',
          nextStepText: 'Der nächste Schritt ist, die ZIP- oder ELPX-Datei mit öffentlichem Link hochzuladen und zu teilen; sobald du sie hast, klicke auf „Weiter“.',
          goTab: 'Weiter: „Ich habe bereits ein ZIP oder ELPX“'
        }
      },
      html: {
        title: 'Start-HTML auswählen',
        subtitle: 'index.html wurde nicht gefunden. Wähle die HTML-Datei, die zuerst geöffnet werden soll.',
        confirm: 'Dieses HTML verwenden'
      },
      embed: {
        title: 'In Website einbetten',
        subtitle: 'Kopiere diesen HTML-Code und füge ihn in deine Website ein, um deine Ressource einzubetten.',
        copy: 'Code kopieren',
        fallback: {
          title: 'Eingebettet nicht möglich',
          subtitle: 'Dein Browser oder die Host-Seite blockiert den benötigten Speicher. Öffne die Ressource in einem neuen Tab.',
          open: 'In neuem Tab öffnen'
        }
      },
      reactPrompt: {
        title: 'Das sieht nach React aus',
        subtitle: 'Dieser Inhalt sieht nach React/JSX aus (nicht HTML). Kopiere diesen Prompt und füge ihn in deinen KI-Chat ein, damit es in HTML umgewandelt wird.',
        prompt: 'Wandle diesen in React/JSX geschriebenen Code in eine einzige `index.html` um, die direkt im Browser funktioniert (nur HTML, CSS und JavaScript). Gib ausschließlich den vollständigen Inhalt der HTML-Datei zurück.',
        copy: 'Prompt kopieren'
      },
      about: {
        title: 'Hilfe',
        intro: 'Kurzanleitung zum Veröffentlichen, Teilen und Verwalten von Ressourcen im Viewer.',
        can: {
          title: 'Was du hochladen kannst',
          item1: 'ZIPs mit statischen Webseiten und ihren Dateien (HTML-Dateien, Bilder, Audio, Video, PDF usw.).',
          item2: 'Materialien aus eXeLearning oder anderen Tools, die nach Web exportieren.',
          item3: 'Alle mit KI erstellten Materialien (Dokumente, Infografiken usw.), die du als Webseite (HTML) herunterladen kannst.',
          item4: 'Ordner mit einer Haupt-HTML-Datei (meist <code>index.html</code>).'
        },
        cant: {
          title: 'Was nicht funktioniert oder scheitern kann',
          item1: 'Webseiten, die einen Server benötigen (Formulare, die Daten speichern, Datenbanken, PHP usw.).',
          item2: 'Externe Links, die Anmeldung oder besondere Berechtigungen erfordern.',
          item3: 'ZIPs ohne HTML-Datei.'
        },
        how: {
          title: 'So funktioniert es',
          step1: 'Bereite deine Ressource als Ordner mit Webseiten (HTML) vor und komprimiere sie als ZIP. Das geht mit der Option „ZIP erstellen“.',
          step2: 'Lade das ZIP zu einem Dienst mit öffentlichem Link hoch (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Teile die Datei, damit jeder mit dem Link sie sehen kann.',
          step4: 'Kopiere die URL und füge sie in das Feld „Füge hier den öffentlichen Link ein“ ein.',
          step5: 'Der Link ist dauerhaft, sodass du ihn an Lernende verteilen kannst.'
        },
        drive: {
          title: 'Wichtig zu Google Drive',
          note: 'Google Drive begrenzt direkte Downloads großer Dateien (ca. 25 MB). Wenn dein ZIP größer ist, kann es fehlschlagen. Dropbox, Nextcloud und andere Dienste erlauben meist größere Dateien ohne dieses Limit.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Hilfe-Inhalt">'
          + '<p class="about-index__title">Inhalt</p>'
          + '<ul>'
          + '<li><a href="#help-que-hace">Was dieser Viewer macht</a></li>'
          + '<li><a href="#help-como-se-usa">So verwendest du ihn</a></li>'
          + '<li><a href="#help-limitaciones">Einschränkungen und typische Probleme</a></li>'
          + '</ul>'
          + '</nav>'
          + '<section aria-labelledby="help-que-hace">'
          + '<h3 class="about-section-title" id="help-que-hace" tabindex="-1">Was dieser Viewer macht</h3>'
          + '<p>Öffnet Web-Ressourcen, die als <strong>ZIP</strong> oder <strong>ELPX</strong> verpackt sind, direkt im Browser.</p>'
          + '<p>Der Viewer <strong>lädt dein Material nicht hoch und veröffentlicht es nicht</strong>: er erzeugt nur einen Link und öffnet ihn.</p>'
          + '<ul>'
          + '<li><strong>Du hostest die ZIP</strong> auf Drive, Dropbox, Nextcloud, GitHub… mit einem öffentlichen Link.</li>'
          + '<li>Jede Person, die den Link öffnet, <strong>lädt die ZIP im Browser herunter</strong>, und der Viewer speichert eine <strong>lokale Kopie</strong>, damit sie sich beim nächsten Mal schneller öffnet.</li>'
          + '<li>Speicher und Ressourcen im Manager gelten <strong>nur für diesen Browser/dieses Gerät</strong>. Es ist kein geteilter Server.</li>'
          + '<li><strong>Nichts wird auf GitHub gespeichert</strong>: GitHub Pages stellt nur die Viewer-Seite (das Programm) bereit, nicht deine Ressourcen.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Datenschutz</strong>: der Viewer teilt nichts automatisch aus deinem Browser und sendet deine Ressourcen nicht an Dritte. Das einzige Externe ist der Download der ZIP über den von dir angegebenen Link.</p>'
          + '<p class="about-note"><strong>Wichtig</strong>: wenn der ZIP-Link öffentlich ist, kann jeder mit diesem Link die Datei herunterladen und ansehen (wie bei jedem öffentlichen Link).</p>'
          + '</section>'
          + '<section aria-labelledby="help-como-se-usa">'
          + '<h3 class="about-section-title" id="help-como-se-usa" tabindex="-1">So verwendest du ihn</h3>'
          + '<ol class="about-steps">'
          + '<li>Bereite deine Ressource als statische Website vor (HTML, CSS, Bilder, Audio, Video…).</li>'
          + '<li>Wähle einen Pfad: <strong>ZIP erstellen</strong> oder <strong>Ich habe bereits ein ZIP oder ELPX</strong>.</li>'
          + '<li>Lade die Datei zu einem Dienst mit öffentlichem Link hoch und teile den Viewer-Link.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-crear" tabindex="-1">Pfad: ZIP erstellen</h4>'
          + '<ol class="about-steps">'
          + '<li>Unter <strong>Veröffentlichen</strong> wähle <strong>ZIP erstellen</strong>.</li>'
          + '<li>Wenn du keine Dateien hast, nutze <strong>Keine Dateien? HTML einfügen</strong> und klicke <strong>ZIP aus HTML erstellen</strong>.</li>'
          + '<li>Wenn du Dateien hast, öffne <strong>Dateien vorhanden? ZIP erstellen</strong>, füge Ordner/Dateien hinzu und klicke <strong>ZIP erstellen und herunterladen</strong>.</li>'
          + '<li>Wenn dein ZIP kein <code>index.html</code> enthält, fragt der Viewer nach der Start-HTML.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-ruta-tengo" tabindex="-1">Pfad: Ich habe bereits ein ZIP oder ELPX</h4>'
          + '<ol class="about-steps">'
          + '<li>Unter <strong>Veröffentlichen</strong> wähle <strong>Ich habe bereits ein ZIP oder ELPX</strong>.</li>'
          + '<li>Füge einen öffentlichen Link zur <strong>ZIP</strong>- oder <strong>ELPX</strong>-Datei ein und klicke <strong>Link erstellen</strong>.</li>'
          + '<li>Nutze <strong>Link kopieren</strong>, <strong>In eine Website einbetten</strong> oder <strong>Vorschau öffnen</strong> je nach Bedarf.</li>'
          + '</ol>'
          + '<h4 class="about-subtitle" id="help-visibilidad" tabindex="-1">Sichtbarkeit und Zugriff</h4>'
          + '<p>Unter <strong>Einstellungen</strong> kannst du festlegen, wann die Ressource sichtbar ist (Zugriff nach Datum) und welche Aktionen während des Zugriffs verfügbar sind.</p>'
          + '<ul>'
          + '<li><strong>Zugriff nach Datum begrenzen</strong>: setze <strong>Start</strong> und optional <strong>Ende</strong>.</li>'
          + '<li><strong>Zugriff ohne Enddatum</strong>: sichtbar ab <strong>Start</strong>, ohne automatisches Schließen.</li>'
          + '<li><strong>Aktionen während des Zugriffs</strong>: erlaube oder blockiere <strong>Teilen</strong>, <strong>Einbetten</strong> und <strong>Herunterladen</strong> im Manager.</li>'
          + '</ul>'
          + '<p class="about-note"><strong>Wenn der Zugriff geschlossen ist</strong>: der Viewer zeigt den Inhalt nicht an und es erscheint die Meldung zum eingeschränkten Zugriff. Der Viewer-Link bleibt bestehen, aber die Ressource kann erst wieder im offenen Zeitraum angesehen werden.</p>'
          + '<h4 class="about-subtitle" id="help-gestor" tabindex="-1">Ressourcenverwaltung</h4>'
          + '<p>Die Ressourcenverwaltung zeigt Ressourcen, die du <strong>in diesem Browser</strong> geöffnet und gespeichert hast.</p>'
          + '<ul>'
          + '<li><strong>Ansehen</strong>: öffnet die gespeicherte Ressource.</li>'
          + '<li><strong>Teilen</strong>: kopiert den Viewer-Link für diese Ressource.</li>'
          + '<li><strong>Einbetten</strong>: zeigt den Einbett-Code (falls erlaubt).</li>'
          + '<li><strong>Bearbeiten</strong>: ändert den Titel in der Ressourcenverwaltung.</li>'
          + '<li><strong>Datei herunterladen</strong>: lädt die Originaldatei (ZIP oder ELPX) herunter.</li>'
          + '<li><strong>Löschen</strong>: entfernt die Ressource aus dem lokalen Speicher dieses Browsers.</li>'
          + '</ul>'
          + '<p class="about-note">Hinweis: Wenn du Browserdaten löschst, das Gerät wechselst oder einen anderen Browser nutzt, können diese Ressourcen verschwinden.</p>'
          + '</section>'
          + '<section aria-labelledby="help-limitaciones">'
          + '<h3 class="about-section-title" id="help-limitaciones" tabindex="-1">Einschränkungen und typische Probleme</h3>'
          + '<ul>'
          + '<li>Funktioniert mit statischen Websites. Nicht geeignet für Seiten, die einen Server benötigen (Datenbanken, PHP, Formulare mit Datenspeicherung…).</li>'
          + '<li>Die Datei muss über einen öffentlichen Link erreichbar sein (ohne Login). Wenn Berechtigungen nötig sind, kann der Viewer nicht herunterladen.</li>'
          + '<li>Wenn das ZIP kein HTML enthält, kann es nicht geöffnet werden. Fehlt <code>index.html</code>, musst du die Start-HTML auswählen.</li>'
          + '<li>Google Drive kann direkte Downloads großer Dateien begrenzen (ca. 25 MB). Wenn es fehlschlägt, probiere Dropbox, Nextcloud oder einen anderen Dienst.</li>'
          + '</ul>'
          + '</section>'
      },
      error: {
        driveTooLarge: 'Die Datei ist zu groß und Google Drive begrenzt Downloads. Versuche es mit Nextcloud, Dropbox oder einem anderen Dienst.',
        loadZip: 'ZIP konnte nicht geladen werden.',
        restricted: 'Diese Ressource ist aufgrund der Datumsbeschränkung nicht mehr verfügbar.',
        embedNotAllowed: 'Einbetten ist für diese Ressource nicht erlaubt.',
        noHtmlSelected: 'Kein HTML ausgewählt.',
        htmlPickerOpen: 'HTML-Auswahl konnte nicht geöffnet werden.',
        serviceWorkerUnavailable: 'Service Worker nicht verfügbar.',
        sha1Unavailable: 'SHA-1 ist in diesem Browser nicht verfügbar.',
        configMissing: 'Setze GAS_WEBAPP_URL in config.js.',
        needHtmlFile: 'Das ZIP benötigt mindestens eine .html-Datei.',
        offlineNotAllowed: 'Dieser Browser erlaubt den Offline-Viewer nicht.',
        fflateMissing: 'ZIP-Engine konnte nicht geladen werden (fflate).',
        zipNoWebFiles: 'Das ZIP enthält keine Webdateien.',
        noSpace: 'Nicht genügend Speicher im Browser.'
      },
      status: {
        preparing: 'Vorbereiten...',
        preparingZip: 'ZIP wird vorbereitet...',
        connecting: 'Verbinden',
        downloadingZip: 'ZIP wird heruntergeladen...',
        restrictedReady: 'Diese Ressource ist zeitlich eingeschränkt. Der Link ist bereit.',
        unpacking: 'Entpacken...',
        saving: 'Im Browser speichern...',
        copySuccess: 'Link kopiert.'
      },
      common: {
        close: 'Schließen',
        cancel: 'Abbrechen',
        delete: 'Löschen'
      },
      units: ['B', 'KB', 'MB', 'GB']
    }
  };
})();
