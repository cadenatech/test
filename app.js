(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var copyButton = document.querySelector('[data-copy]');
  var embedButton = document.querySelector('[data-embed]');
  var openLink = document.querySelector('[data-open]');
  var stepThree = document.querySelector('[data-step-three]');
  var loadingScreen = document.querySelector('[data-loading]');
  var loadingMessage = document.querySelector('[data-loading-message]');
  var loadingBar = document.querySelector('[data-loading-bar]');
  var loadingEta = document.querySelector('[data-loading-eta]');
  var mainContent = document.querySelector('[data-main]');
  var embedShell = document.querySelector('[data-embed-shell]');
  var embedFrame = document.querySelector('[data-embed-frame]');
  var embedFallback = document.querySelector('[data-embed-fallback]');
  var embedOpenFallback = document.querySelector('[data-embed-open-fallback]');
  var embedModal = document.querySelector('[data-embed-modal]');
  var embedCode = document.querySelector('[data-embed-code]');
  var embedCopyButton = document.querySelector('[data-embed-copy]');
  var embedCloseButtons = document.querySelectorAll('[data-embed-close]');
  var aboutOpen = document.querySelector('[data-about-open]');
  var aboutModal = document.querySelector('[data-about-modal]');
  var aboutCloseButtons = document.querySelectorAll('[data-about-close]');
  var restrictModal = document.querySelector('[data-restrict-modal]');
  var restrictRange = document.querySelector('[data-restrict-range]');
  var restrictCloseButtons = document.querySelectorAll('[data-restrict-close]');
  var htmlModal = document.querySelector('[data-html-modal]');
  var htmlList = document.querySelector('[data-html-list]');
  var htmlConfirm = document.querySelector('[data-html-confirm]');
  var htmlCloseButtons = document.querySelectorAll('[data-html-close]');
  var reactModal = document.querySelector('[data-react-modal]');
  var reactPrompt = document.querySelector('[data-react-prompt]');
  var reactCopyButton = document.querySelector('[data-react-copy]');
  var reactCloseButtons = document.querySelectorAll('[data-react-close]');
  var tabButtons = document.querySelectorAll('[data-tab]');
  var tabPanels = document.querySelectorAll('[data-tab-panel]');
  var publishChoice = document.querySelector('[data-publish-choice]');
  var publishModules = document.querySelectorAll('[data-publish-module]');
  var publishStartButtons = document.querySelectorAll('[data-publish-start]');
  var publishBackButtons = document.querySelectorAll('[data-publish-back]');
  var managerList = document.querySelector('[data-manager-list]');
  var storageUsed = document.querySelector('[data-storage-used]');
  var storageUsedPercent = document.querySelector('[data-storage-used-percent]');
  var storageTotal = document.querySelector('[data-storage-total]');
  var storageCount = document.querySelector('[data-storage-count]');
  var deleteAllButton = document.querySelector('[data-delete-all]');
  var dropzone = document.querySelector('[data-dropzone]');
  var folderInput = document.querySelector('[data-folder-input]');
  var fileInput = document.querySelector('[data-file-input]');
  var folderButton = document.querySelector('[data-folder-button]');
  var fileButton = document.querySelector('[data-file-button]');
  var uploadStatus = document.querySelector('[data-upload-status]');
  var buildZipButton = document.querySelector('[data-build-zip]');
  var zipStatus = document.querySelector('[data-zip-status]');
  var zipNameInput = document.querySelector('[data-zip-name]');
  var htmlZipInput = document.querySelector('[data-html-zip-input]');
  var htmlZipBuildButton = document.querySelector('[data-html-zip-build]');
  var htmlZipStatus = document.querySelector('[data-html-zip-status]');
  var langSelect = document.querySelector('[data-lang-select]');
  var cleanupThresholdInput = document.querySelector('[data-cleanup-threshold]');
  var cleanupThresholdValue = document.querySelector('[data-cleanup-threshold-value]');
  var cleanupDaysInput = document.querySelector('[data-cleanup-days]');
  var resetCleanupButton = document.querySelector('[data-reset-cleanup]');
  var managerSortSelect = document.querySelector('[data-manager-sort]');
  var managerSettingsOpenButton = document.querySelector('[data-manager-settings-open]');
  var managerSettingsModal = document.querySelector('[data-manager-settings-modal]');
  var managerSettingsCloseButtons = document.querySelectorAll('[data-manager-settings-close]');
  var languageOpenButton = document.querySelector('[data-lang-open]');
  var languagePanel = document.querySelector('[data-lang-panel]');
  var mainSettingsOpenButtons = document.querySelectorAll('[data-main-settings-open]');
  var mainSettingsModal = document.querySelector('[data-main-settings-modal]');
  var mainSettingsCloseButtons = document.querySelectorAll('[data-main-settings-close]');
  var restrictionToggle = document.querySelector('[data-restrict-toggle]');
  var restrictionFields = document.querySelector('[data-restrict-fields]');
  var restrictionActions = document.querySelector('[data-restrict-actions]');
  var restrictionStartInput = document.querySelector('[data-restrict-start]');
  var restrictionEndInput = document.querySelector('[data-restrict-end]');
  var restrictionNoEnd = document.querySelector('[data-restrict-no-end]');
  var restrictionAllowShare = document.querySelector('[data-restrict-allow-share]');
  var restrictionAllowEmbed = document.querySelector('[data-restrict-allow-embed]');
  var restrictionAllowDownload = document.querySelector('[data-restrict-allow-download]');
  var restrictionHint = document.querySelector('[data-restrict-hint]');
  var restrictionAccordion = document.querySelector('[data-restrict-accordion]');
  var restrictionZipInput = document.querySelector('[data-restrict-zip-input]');
  var restrictionZipPick = document.querySelector('[data-restrict-zip-pick]');
  var restrictionZipApply = document.querySelector('[data-restrict-zip-apply]');
  var restrictionZipStatus = document.querySelector('[data-restrict-zip-status]');
  var restrictionCountdown = document.querySelector('[data-restrict-countdown]');
  var ignoreRestrictionsForShare = false;
  var restrictCountdownTimer = null;

  var currentShareLink = '';
  var currentZipUrl = '';
  var loadingActive = false;
  var progressTimer = null;
  var lastProgressValue = 0;
  var selectedFiles = [];
  var zipNameDirty = false;
  var htmlPickerResolve = null;
  var htmlPickerReject = null;
  var htmlPickerWasLoading = false;
  var toastTimer = null;
  var inlineToastTimer = null;
  var activeTitleEdit = null;
  var activePublishModule = '';
  var isEmbedMode = false;
  var currentEmbedId = '';
  var embedHeightTimer = null;
  var lastEmbedHeight = 0;
  var currentRestrictions = null;
  var restrictionZipFile = null;

  var DB_NAME = 'visor-web-sites';
  var DB_VERSION = 1;
  var STORE_SITES = 'sites';
  var STORE_FILES = 'files';

  var I18N = {
    es: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Cargando material',
        message: 'Preparando...',
        eta: 'Tiempo estimado de descarga: --',
        etaPrefix: 'Tiempo estimado de descarga: ',
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
        title: 'Ajustes',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por fechas',
        restrictHint: 'No limites el acceso a no ser que tengas un buen motivo para hacerlo.',
        restrictToggle: 'Limitar el acceso por fechas',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        neverExpires: 'No caducar nunca',
        actionsTitle: 'Acciones permitidas mientras el acceso esté abierto',
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
          bodyHtml: 'Un <strong>ZIP</strong> es un archivo comprimido que agrupa varios archivos (y carpetas) en uno solo. En <strong>eXeLearning 3+</strong>, el archivo <code>.elpx</code> también sirve porque ya es un ZIP.'
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
        stats: {
          used: 'Espacio usado',
          total: 'Espacio total',
          count: 'Recursos guardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Fecha',
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
        opening: 'Apertura: {date}',
        closing: 'Cierre: {date}'
      },
      zipper: {
        title: 'Crear ZIP para el visor',
        accordion: {
          filesTitle: '¿Tienes archivos? Crea el ZIP'
        },
        subtitle: {
          lead: 'Para compartir tu recurso, comprime los archivos (o la carpeta que los contiene) en un archivo .zip.',
          exeSentenceHtml: 'Si usas <strong>eXeLearning</strong>, en la versión 3+ puedes usar directamente el archivo <code>.elpx</code> (ya es un ZIP). En otras versiones, exporta a ZIP desde el propio programa y, si quieres, continúa con la opción “Ya tengo un ZIP”.'
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
          title: '¿Quieres compartir el ZIP?',
          step1: 'Sube el ZIP a un servicio con enlace público (Drive, Dropbox, GitHub…).',
          step2: 'Copia el enlace público y pégalo en “Ya tengo un ZIP”.',
          goTab: 'Abrir “Ya tengo un ZIP”'
        }
      },
      html: {
        title: 'Elige el HTML inicial',
        subtitle: 'No se encontró un index.html. Selecciona el archivo HTML que quieres abrir primero.',
        confirm: 'Usar este HTML'
      },
      embed: {
        title: 'Insertar en una web',
        subtitle: 'Copia y pega este código HTML en tu web. Incluye autoajuste de altura si la página permite scripts.',
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
        title: '¿Qué hace este visor?',
        intro: 'Este visor abre un ZIP que contiene una web sencilla con HTML, CSS, imágenes, vídeos, audio y enlaces internos para que puedas compartirla con tu alumnado sin instalar nada.',
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
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Publicar</h3><ul><li><strong>Crear un ZIP</strong>: crea y descarga un ZIP desde tus archivos o pegando HTML.</li><li><strong>Ya tengo un ZIP</strong>: pega el enlace público al ZIP y pulsa "Crear enlace" para obtener el enlace del visor.</li><li>Opcional: copia el enlace o abre la vista previa.</li></ul></div>'
          + '<div class="about-section"><h3>Crear un ZIP</h3><ul><li><strong>¿No tienes archivos? Pega el HTML</strong>: pega el HTML completo y se creará un ZIP con <code>index.html</code>.</li><li><strong>¿Tienes archivos? Crea el ZIP</strong>: arrastra la carpeta o los archivos y pulsa "Crear y descargar ZIP".</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>Ya tengo un ZIP</h3><ul><li>Pega el enlace público del ZIP.</li><li>Pulsa "Crear enlace" y copia el resultado o abre la vista previa.</li></ul></div>'
          + '<div class="about-section"><h3>Gestor de recursos</h3><ul><li>Aquí puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Descargar</strong> baja el archivo original (ZIP o .elpx).</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'El archivo es demasiado grande y Google Drive limita las descargas.',
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
        title: 'Ajustos',
        languageTitle: 'Idioma',
        restrictTitle: 'Accés per dates',
        restrictHint: 'No limitis l’accés si no tens un bon motiu per fer-ho.',
        restrictToggle: 'Limitar l’accés per dates',
        startLabel: 'Inici',
        endLabel: 'Fi',
        neverExpires: 'No caduca mai',
        actionsTitle: 'Accions permeses mentre l’accés estigui obert',
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
          bodyHtml: 'Un <strong>ZIP</strong> és un fitxer comprimit que agrupa diversos fitxers (i carpetes) en un de sol. A <strong>eXeLearning 3+</strong>, el fitxer <code>.elpx</code> també serveix perquè ja és un ZIP.'
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
        stats: {
          used: 'Espai usat',
          total: 'Espai total',
          count: 'Recursos desats'
        },
        sort: {
          label: 'Ordenar per',
          title: 'Títol',
          date: 'Data',
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
        opening: 'Obertura: {date}',
        closing: 'Tancament: {date}'
      },
      zipper: {
        title: 'Crear ZIP per al visor',
        accordion: {
          filesTitle: 'Tens fitxers? Crea el ZIP'
        },
        subtitle: {
          lead: 'Per compartir el teu recurs has de comprimir els fitxers (o la carpeta que els conté) en un arxiu ZIP.',
          exeSentenceHtml: "Si fas servir <strong>eXeLearning</strong>, a la versió 3+ pots usar directament el fitxer <code>.elpx</code> (ja és un ZIP). En altres versions, exporta a ZIP des del mateix programa i, si vols, continua amb l’opció “Ja tinc un ZIP”."
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
          }
        },
        help: {
          title: 'Vols compartir el ZIP?',
          step1: 'Puja el ZIP a un servei amb enllaç públic (Drive, Dropbox, GitHub…).',
          step2: 'Copia l’enllaç públic i enganxa’l a “Ja tinc un ZIP”.',
          goTab: 'Obrir “Ja tinc un ZIP”'
        }
      },
      html: {
        title: 'Tria l’HTML inicial',
        subtitle: 'No s’ha trobat un index.html. Selecciona el fitxer HTML que vols obrir primer.',
        confirm: 'Fes servir aquest HTML'
      },
      embed: {
        title: 'Inserir en una web',
        subtitle: 'Copia i enganxa aquest codi HTML a la teva web. Inclou autoajust d’alçada si la pàgina permet scripts.',
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
        title: 'Què fa aquest visor?',
        intro: 'Aquest visor obre un ZIP que conté una web senzilla amb HTML, CSS, imatges, vídeos, àudio i enllaços interns perquè la puguis compartir amb l’alumnat sense instal·lar res.',
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
        body: '<p>Aquest visor genera enllaços permanents a recursos educatius en format web allotjats en serveis d’emmagatzematge al núvol com Google Drive o Dropbox, facilitant-ne la publicació i l’accés per part de l’alumnat.</p>'
          + '<div class="about-section"><h3>Publicar</h3><ul><li><strong>Crear un ZIP</strong>: crea i descarrega un ZIP des dels teus fitxers o enganxant HTML.</li><li><strong>Ja tinc un ZIP</strong>: enganxa l’enllaç públic al ZIP i prem “Crear enllaç” per obtenir l’enllaç del visor.</li><li>Opcional: copia l’enllaç o obre la vista prèvia.</li></ul></div>'
          + '<div class="about-section"><h3>Crear un ZIP</h3><ul><li><strong>No tens fitxers? Enganxa l’HTML</strong>: enganxa l’HTML complet i es crearà un ZIP amb <code>index.html</code>.</li><li><strong>Tens fitxers? Crea el ZIP</strong>: arrossega la carpeta o els fitxers i prem “Crear i descarregar ZIP”.</li><li>Si no hi ha <code>index.html</code>, el visor et demanarà quin HTML obrir primer.</li></ul></div>'
          + '<div class="about-section"><h3>Ja tinc un ZIP</h3><ul><li>Enganxa l’enllaç públic del ZIP.</li><li>Prem “Crear enllaç” i copia el resultat o obre la vista prèvia.</li></ul></div>'
          + '<div class="about-section"><h3>Gestor de recursos</h3><ul><li>Aquí pots veure i gestionar els recursos que has obert des d’aquest navegador.</li><li><strong>Veure</strong> obre el recurs desat.</li><li><strong>Compartir</strong> copia l’enllaç del visor (pantalla completa).</li><li><strong>Editar</strong> canvia el títol.</li><li><strong>Descarregar</strong> baixa el fitxer original (ZIP o .elpx).</li><li><strong>Eliminar</strong> esborra el recurs del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Què funciona i què pot fallar</h3><ul><li>Funciona amb webs estàtiques (HTML, CSS, imatges, àudio, vídeo, PDF...).</li><li>No funciona amb webs que requereixen servidor (formularis amb BD, PHP, etc.).</li><li>Google Drive limita les descàrregues directes d’arxius grans (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'El fitxer és massa gran i Google Drive limita les descàrregues.',
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
        title: 'Axustes',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por datas',
        restrictHint: 'Non limites o acceso salvo que teñas un bo motivo para facelo.',
        restrictToggle: 'Limitar o acceso por datas',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        neverExpires: 'Non caduca nunca',
        actionsTitle: 'Accións permitidas mentres o acceso estea aberto',
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
          bodyHtml: 'Un <strong>ZIP</strong> é un ficheiro comprimido que agrupa varios ficheiros (e cartafoles) nun só. En <strong>eXeLearning 3+</strong>, o ficheiro <code>.elpx</code> tamén serve porque xa é un ZIP.'
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
        stats: {
          used: 'Espazo usado',
          total: 'Espazo total',
          count: 'Recursos gardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Data',
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
        opening: 'Apertura: {date}',
        closing: 'Peche: {date}'
      },
      zipper: {
        title: 'Crear ZIP para o visor',
        accordion: {
          filesTitle: 'Tes ficheiros? Crea o ZIP'
        },
        subtitle: {
          lead: 'Para compartir o teu recurso necesitas comprimir os ficheiros (ou o cartafol que os contén) nun arquivo ZIP.',
          exeSentenceHtml: 'Se usas <strong>eXeLearning</strong>, na versión 3+ podes usar directamente o ficheiro <code>.elpx</code> (xa é un ZIP). Noutras versións, exporta a ZIP desde o propio programa e, se queres, continúa coa opción “Xa teño un ZIP”.'
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
          }
        },
        help: {
          title: 'Queres compartir o ZIP?',
          step1: 'Sube o ZIP a un servizo con ligazón pública (Drive, Dropbox, GitHub…).',
          step2: 'Copia a ligazón pública e pégaa en “Xa teño un ZIP”.',
          goTab: 'Abrir “Xa teño un ZIP”'
        }
      },
      html: {
        title: 'Escolle o HTML inicial',
        subtitle: 'Non se atopou un index.html. Selecciona o ficheiro HTML que queres abrir primeiro.',
        confirm: 'Usar este HTML'
      },
      embed: {
        title: 'Inserir nunha web',
        subtitle: 'Copia e pega este código HTML na túa web. Inclúe autoaxuste de altura se a páxina permite scripts.',
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
        title: 'Que fai este visor?',
        intro: 'Este visor abre un ZIP que contén unha web sinxela con HTML, CSS, imaxes, vídeos, audio e ligazóns internas para que a poidas compartir co teu alumnado sen instalar nada.',
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
        body: '<p>Este visor xera ligazóns permanentes a recursos educativos en formato web almacenados en servizos de almacenamento na nube como Google Drive ou Dropbox, facilitando a súa publicación e o acceso por parte do alumnado.</p>'
          + '<div class="about-section"><h3>Publicar</h3><ul><li><strong>Crear un ZIP</strong>: crea e descarga un ZIP desde os teus ficheiros ou pegando HTML.</li><li><strong>Xa teño un ZIP</strong>: pega a ligazón pública ao ZIP e preme “Crear ligazón” para obter a ligazón do visor.</li><li>Opcional: copia a ligazón ou abre a vista previa.</li></ul></div>'
          + '<div class="about-section"><h3>Crear un ZIP</h3><ul><li><strong>Non tes ficheiros? Pega o HTML</strong>: pega o HTML completo e crearase un ZIP con <code>index.html</code>.</li><li><strong>Tes ficheiros? Crea o ZIP</strong>: arrastra o cartafol ou os ficheiros e preme “Crear e descargar ZIP”.</li><li>Se non hai <code>index.html</code>, o visor pedirache que HTML abrir primeiro.</li></ul></div>'
          + '<div class="about-section"><h3>Xa teño un ZIP</h3><ul><li>Pega a ligazón pública do ZIP.</li><li>Preme “Crear ligazón” e copia o resultado ou abre a vista previa.</li></ul></div>'
          + '<div class="about-section"><h3>Xestor de recursos</h3><ul><li>Aquí podes ver e xestionar os recursos que abríches desde este navegador.</li><li><strong>Ver</strong> abre o recurso gardado.</li><li><strong>Compartir</strong> copia a ligazón do visor (pantalla completa).</li><li><strong>Editar</strong> cambia o título.</li><li><strong>Descargar</strong> baixa o ficheiro orixinal (ZIP ou .elpx).</li><li><strong>Eliminar</strong> borra o recurso do navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Que funciona e que pode fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imaxes, audio, vídeo, PDF...).</li><li>Non funciona con webs que requiren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de ficheiros grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'O ficheiro é demasiado grande e Google Drive limita as descargas.',
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
        title: 'Ezarpenak',
        languageTitle: 'Hizkuntza',
        restrictTitle: 'Sarbidea daten bidez',
        restrictHint: 'Ez mugatu sarbidea arrazoi onik ez baduzu.',
        restrictToggle: 'Sarbidea daten bidez mugatu',
        startLabel: 'Hasiera',
        endLabel: 'Amaiera',
        neverExpires: 'Ez da inoiz iraungiko',
        actionsTitle: 'Sarbidea irekita dagoenean baimendutako ekintzak',
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
          bodyHtml: '<strong>ZIP</strong> bat fitxategi konprimatua da: hainbat fitxategi (eta karpeta) fitxategi bakarrean biltzen ditu. <strong>eXeLearning 3+</strong> bertsioan, <code>.elpx</code> fitxategiak ere balio du, dagoeneko ZIP bat delako.'
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
        stats: {
          used: 'Erabilitako espazioa',
          total: 'Guztizko espazioa',
          count: 'Gordetako baliabideak'
        },
        sort: {
          label: 'Ordenatu',
          title: 'Izenburua',
          date: 'Data',
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
        opening: 'Irekiera: {date}',
        closing: 'Itxiera: {date}'
      },
      zipper: {
        title: 'Bisorerako ZIP sortu',
        accordion: {
          filesTitle: 'Fitxategiak dituzu? Sortu ZIPa'
        },
        subtitle: {
          lead: 'Zure baliabidea partekatzeko, fitxategiak (edo horiek dituen karpeta) ZIP fitxategi batean konprimitu behar dituzu.',
          exeSentenceHtml: '<strong>eXeLearning</strong> erabiltzen baduzu, 3+ bertsioan <code>.elpx</code> fitxategia zuzenean erabil dezakezu (dagoeneko ZIP bat da). Beste bertsioetan, esportatu ZIPera programatik bertatik eta, nahi baduzu, “ZIP bat badaukat” aukerarekin jarraitu.'
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
          }
        },
        help: {
          title: 'ZIPa partekatu nahi duzu?',
          step1: 'Igo ZIPa esteka publikoarekin duen zerbitzu batera (Drive, Dropbox, GitHub…).',
          step2: 'Kopiatu esteka publikoa eta itsatsi “ZIP bat badaukat” aukeran.',
          goTab: 'Ireki “ZIP bat badaukat”'
        }
      },
      html: {
        title: 'Aukeratu hasierako HTMLa',
        subtitle: 'Ez da index.html aurkitu. Hautatu lehenik ireki nahi duzun HTML fitxategia.',
        confirm: 'Erabili HTML hau'
      },
      embed: {
        title: 'Web batean txertatu',
        subtitle: 'Kopiatu eta itsatsi HTML kode hau zure webgunean. Altuera automatikoki egokitzen du orriak scriptak onartzen baditu.',
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
        title: 'Zer egiten du bisore honek?',
        intro: 'Bisore honek ZIP bat irekitzen du, HTML, CSS, irudiak, bideoak, audioa eta barne-estekak dituen web sinple batekin, instalatu beharrik gabe partekatzeko.',
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
        body: '<p>Bisore honek hezkuntza-baliabideak web formatuan (Google Drive edo Dropbox bezalako hodei-zerbitzuetan) partekatzeko esteka iraunkorrak sortzen ditu, ikasleek errazago eskuratu ditzaten.</p>'
          + '<div class="about-section"><h3>Argitaratu</h3><ul><li><strong>ZIP bat sortu</strong>: sortu eta deskargatu ZIP bat zure fitxategietatik edo HTMLa itsatsita.</li><li><strong>ZIP bat badaukat</strong>: itsatsi ZIParen esteka publikoa eta sakatu “Esteka sortu” bisorearen esteka lortzeko.</li><li>Aukerakoa: kopiatu esteka edo ireki aurrebista.</li></ul></div>'
          + '<div class="about-section"><h3>ZIP bat sortu</h3><ul><li><strong>Ez duzu fitxategirik? Itsatsi HTMLa</strong>: itsatsi HTML osoa eta ZIP bat sortuko da <code>index.html</code>arekin.</li><li><strong>Fitxategiak dituzu? Sortu ZIPa</strong>: arrastatu karpeta edo fitxategiak eta sakatu “Sortu eta deskargatu ZIPa”.</li><li><code>index.html</code> ez badago, bisoreak lehenik zein HTML ireki galdetuko dizu.</li></ul></div>'
          + '<div class="about-section"><h3>ZIP bat badaukat</h3><ul><li>Itsatsi ZIParen esteka publikoa.</li><li>Sakatu “Esteka sortu” eta kopiatu emaitza edo ireki aurrebista.</li></ul></div>'
          + '<div class="about-section"><h3>Baliabide kudeatzailea</h3><ul><li>Hemen nabigatzaile honetan irekitako baliabideak ikusi eta kudeatu ditzakezu.</li><li><strong>Ikusi</strong> gordetako baliabidea irekitzen du.</li><li><strong>Partekatu</strong> bisorearen esteka kopiatzen du (pantaila osoa).</li><li><strong>Editatu</strong> izenburua aldatzen du.</li><li><strong>Deskargatu</strong> jatorrizko fitxategia jaisten du (ZIP edo .elpx).</li><li><strong>Ezabatu</strong> baliabidea nabigatzailetik kentzen du.</li></ul></div>'
          + '<div class="about-section"><h3>Zer dabil eta zer huts egin dezake</h3><ul><li>Web estatikoekin dabil (HTML, CSS, irudiak, audioa, bideoa, PDF...).</li><li>Ez dabil zerbitzaria behar duten webekin (DBko formularioak, PHP, etab.).</li><li>Google Drivek fitxategi handien deskarga zuzena mugatzen du (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'Fitxategia handiegia da eta Google Drivek deskargak mugatzen ditu.',
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
        title: 'Settings',
        languageTitle: 'Language',
        restrictTitle: 'Date access',
        restrictHint: 'Do not limit access unless you have a good reason to do so.',
        restrictToggle: 'Limit access by dates',
        startLabel: 'Start',
        endLabel: 'End',
        neverExpires: 'Never expires',
        actionsTitle: 'Allowed actions while access is open',
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
          bodyHtml: 'A <strong>ZIP</strong> is a compressed file that bundles multiple files (and folders) into one. In <strong>eXeLearning 3+</strong>, the <code>.elpx</code> file also works because it’s already a ZIP.'
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
        stats: {
          used: 'Space used',
          total: 'Total space',
          count: 'Saved resources'
        },
        sort: {
          label: 'Sort by',
          title: 'Title',
          date: 'Date',
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
        opening: 'Opens: {date}',
        closing: 'Closes: {date}'
      },
      zipper: {
        title: 'Create ZIP for the viewer',
        accordion: {
          filesTitle: 'Have files? Create the ZIP'
        },
        subtitle: {
          lead: 'To share your resource, compress the files (or the folder that contains them) into a .zip file.',
          exeSentenceHtml: 'If you use <strong>eXeLearning</strong>, in version 3+ you can use the <code>.elpx</code> file directly (it’s already a ZIP). In other versions, export to ZIP from the program and, if you want, continue with “I already have a ZIP”.'
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
          }
        },
        help: {
          title: 'Want to share the ZIP?',
          step1: 'Upload the ZIP to a service with a public link (Drive, Dropbox, GitHub…).',
          step2: 'Copy the public link and paste it into “I already have a ZIP”.',
          goTab: 'Open “I already have a ZIP”'
        }
      },
      html: {
        title: 'Choose the initial HTML',
        subtitle: 'index.html was not found. Select the HTML file you want to open first.',
        confirm: 'Use this HTML'
      },
      embed: {
        title: 'Embed in a website',
        subtitle: 'Copy and paste this HTML code into your website. It includes auto height resizing if the page allows scripts.',
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
        title: 'What does this viewer do?',
        intro: 'This viewer opens a ZIP containing a simple website with HTML, CSS, images, videos, audio and internal links so you can share it with your students without installing anything.',
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
        body: '<p>This viewer generates permanent links to educational resources in web format hosted on cloud storage services such as Google Drive or Dropbox, making publishing and access easier for students.</p>'
          + '<div class="about-section"><h3>Publish</h3><ul><li><strong>Create a ZIP</strong>: create and download a ZIP from your files or by pasting HTML.</li><li><strong>I already have a ZIP</strong>: paste the public ZIP link and click “Create link” to get the viewer link.</li><li>Optional: copy the link or open the preview.</li></ul></div>'
          + '<div class="about-section"><h3>Create a ZIP</h3><ul><li><strong>No files? Paste the HTML</strong>: paste the full HTML and a ZIP with <code>index.html</code> will be created.</li><li><strong>Have files? Create the ZIP</strong>: drop the folder/files and click “Create and download ZIP”.</li><li>If there is no <code>index.html</code>, the viewer will ask which HTML to open first.</li></ul></div>'
          + '<div class="about-section"><h3>I already have a ZIP</h3><ul><li>Paste the public ZIP link.</li><li>Click “Create link” and copy the result or open the preview.</li></ul></div>'
          + '<div class="about-section"><h3>Resource manager</h3><ul><li>Here you can review and manage the resources you opened from this browser.</li><li><strong>View</strong> opens the saved resource.</li><li><strong>Share</strong> copies the viewer link (full screen).</li><li><strong>Edit</strong> changes the title.</li><li><strong>Download</strong> downloads the original file (ZIP or .elpx).</li><li><strong>Delete</strong> removes the resource from the browser.</li></ul></div>'
          + '<div class="about-section"><h3>What works and what may fail</h3><ul><li>Works with static websites (HTML, CSS, images, audio, video, PDF...).</li><li>Does not work with sites that require a server (database forms, PHP, etc.).</li><li>Google Drive limits direct downloads of large files (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'The file is too large and Google Drive limits downloads.',
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
        title: 'Einstellungen',
        languageTitle: 'Sprache',
        restrictTitle: 'Zugriff nach Datum',
        restrictHint: 'Begrenze den Zugriff nur, wenn du einen guten Grund dafür hast.',
        restrictToggle: 'Zugriff nach Datum begrenzen',
        startLabel: 'Start',
        endLabel: 'Ende',
        neverExpires: 'Nie ablaufen',
        actionsTitle: 'Erlaubte Aktionen, solange der Zugriff offen ist',
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
          bodyHtml: 'Eine <strong>ZIP</strong>-Datei ist ein komprimiertes Archiv, das mehrere Dateien (und Ordner) in einer Datei bündelt. In <strong>eXeLearning 3+</strong> funktioniert auch die <code>.elpx</code>-Datei, weil sie bereits ein ZIP ist.'
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
        stats: {
          used: 'Belegter Speicher',
          total: 'Gesamtspeicher',
          count: 'Gespeicherte Ressourcen'
        },
        sort: {
          label: 'Sortieren nach',
          title: 'Titel',
          date: 'Datum',
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
        opening: 'Öffnet: {date}',
        closing: 'Schließt: {date}'
      },
      zipper: {
        title: 'ZIP für den Viewer erstellen',
        accordion: {
          filesTitle: 'Dateien vorhanden? ZIP erstellen'
        },
        subtitle: {
          lead: 'Um deine Ressource zu teilen, komprimiere die Dateien (oder den Ordner, der sie enthält) in eine ZIP-Datei.',
          exeSentenceHtml: 'Wenn du <strong>eXeLearning</strong> nutzt, kannst du in Version 3+ die <code>.elpx</code>-Datei direkt verwenden (sie ist bereits ein ZIP). In anderen Versionen exportiere als ZIP und fahre bei Bedarf mit „Ich habe bereits ein ZIP“ fort.'
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
          }
        },
        help: {
          title: 'ZIP teilen?',
          step1: 'Lade das ZIP zu einem Dienst mit öffentlichem Link hoch (Drive, Dropbox, GitHub…).',
          step2: 'Kopiere den öffentlichen Link und füge ihn bei „Ich habe bereits ein ZIP“ ein.',
          goTab: '„Ich habe bereits ein ZIP“ öffnen'
        }
      },
      html: {
        title: 'Start-HTML auswählen',
        subtitle: 'index.html wurde nicht gefunden. Wähle die HTML-Datei, die zuerst geöffnet werden soll.',
        confirm: 'Dieses HTML verwenden'
      },
      embed: {
        title: 'In Website einbetten',
        subtitle: 'Kopiere diesen HTML-Code und füge ihn in deine Website ein. Er enthält eine automatische Höhenanpassung, wenn die Seite Skripte erlaubt.',
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
        title: 'Was macht dieser Viewer?',
        intro: 'Dieser Viewer öffnet ein ZIP mit einer einfachen Website mit HTML, CSS, Bildern, Videos, Audio und internen Links, damit du sie ohne Installation mit Lernenden teilen kannst.',
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
        body: '<p>Dieser Viewer erstellt dauerhafte Links zu Bildungsressourcen im Web-Format, die in Cloud-Speichern wie Google Drive oder Dropbox liegen, und erleichtert so Veröffentlichung und Zugriff.</p>'
          + '<div class="about-section"><h3>Veröffentlichen</h3><ul><li><strong>ZIP erstellen</strong>: Erstelle und lade ein ZIP aus deinen Dateien herunter oder indem du HTML einfügst.</li><li><strong>Ich habe bereits ein ZIP</strong>: Füge den öffentlichen ZIP-Link ein und klicke auf „Link erstellen“, um den Viewer-Link zu erhalten.</li><li>Optional: Link kopieren oder Vorschau öffnen.</li></ul></div>'
          + '<div class="about-section"><h3>ZIP erstellen</h3><ul><li><strong>Keine Dateien? HTML einfügen</strong>: Füge das vollständige HTML ein und es wird ein ZIP mit <code>index.html</code> erstellt.</li><li><strong>Dateien vorhanden? ZIP erstellen</strong>: Ordner/Dateien ablegen und „ZIP erstellen und herunterladen“ klicken.</li><li>Wenn es kein <code>index.html</code> gibt, fragt der Viewer, welche HTML-Datei zuerst geöffnet werden soll.</li></ul></div>'
          + '<div class="about-section"><h3>Ich habe bereits ein ZIP</h3><ul><li>Füge den öffentlichen ZIP-Link ein.</li><li>Klicke auf „Link erstellen“ und kopiere das Ergebnis oder öffne die Vorschau.</li></ul></div>'
          + '<div class="about-section"><h3>Ressourcenverwaltung</h3><ul><li>Hier kannst du die in diesem Browser geöffneten Ressourcen ansehen und verwalten.</li><li><strong>Ansehen</strong> öffnet die gespeicherte Ressource.</li><li><strong>Teilen</strong> kopiert den Viewer-Link (Vollbild).</li><li><strong>Bearbeiten</strong> ändert den Titel.</li><li><strong>Datei herunterladen</strong> lädt die Originaldatei (ZIP oder .elpx) herunter.</li><li><strong>Löschen</strong> entfernt die Ressource aus dem Browser.</li></ul></div>'
          + '<div class="about-section"><h3>Was funktioniert und was scheitern kann</h3><ul><li>Funktioniert mit statischen Webseiten (HTML, CSS, Bilder, Audio, Video, PDF...).</li><li>Funktioniert nicht mit Seiten, die einen Server benötigen (DB-Formulare, PHP usw.).</li><li>Google Drive begrenzt direkte Downloads großer Dateien (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'Die Datei ist zu groß und Google Drive begrenzt Downloads.',
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

  var LANG_KEY = 'visor-lang';
  var currentLang = 'es';
  var CLEANUP_THRESHOLD_KEY = 'visor-cleanup-threshold';
  var CLEANUP_DAYS_KEY = 'visor-cleanup-days';
  var CLEANUP_THRESHOLD_DEFAULT = 70;
  var CLEANUP_DAYS_DEFAULT = 30;
  var MANAGER_SORT_KEY = 'visor-manager-sort';
  var MANAGER_SORT_DIR_KEY = 'visor-manager-sort-dir';
  var MANAGER_SORT_DEFAULT = 'date';
  var MANAGER_SORT_DIR_DEFAULT = 'desc';

  var SERVICE_INFO = {
    default: {
      placeholderKey: 'service.otherPlaceholder'
    }
  };

  function normalizeLang(lang) {
    if (!lang) return 'es';
    var value = String(lang).toLowerCase();
    if (value.indexOf('-') !== -1) {
      value = value.split('-')[0];
    }
    if (value.indexOf('_') !== -1) {
      value = value.split('_')[0];
    }
    if (I18N[value]) return value;
    return 'es';
  }

  function getSavedLang() {
    try {
      return normalizeLang(localStorage.getItem(LANG_KEY));
    } catch (err) {
      return null;
    }
  }

  function getStoredNumber(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null || raw === '') return fallback;
      var value = Number(raw);
      if (value === 0) return fallback;
      if (typeof value !== 'number' || isNaN(value)) return fallback;
      return value;
    } catch (err) {
      return fallback;
    }
  }

  function getManagerSort() {
    try {
      return localStorage.getItem(MANAGER_SORT_KEY) || MANAGER_SORT_DEFAULT;
    } catch (err) {
      return MANAGER_SORT_DEFAULT;
    }
  }

  function setManagerSort(value) {
    var sortValue = value || MANAGER_SORT_DEFAULT;
    try {
      localStorage.setItem(MANAGER_SORT_KEY, sortValue);
    } catch (err) {}
    if (managerSortSelect) {
      managerSortSelect.value = sortValue;
    }
  }

  function getManagerSortDir() {
    try {
      return localStorage.getItem(MANAGER_SORT_DIR_KEY) || MANAGER_SORT_DIR_DEFAULT;
    } catch (err) {
      return MANAGER_SORT_DIR_DEFAULT;
    }
  }

  function setManagerSortDir(value) {
    var dirValue = value === 'desc' ? 'desc' : 'asc';
    try {
      localStorage.setItem(MANAGER_SORT_DIR_KEY, dirValue);
    } catch (err) {}
    updateSortDirButton(dirValue);
  }

  function updateSortDirButton(dirValue) {
    var button = document.querySelector('[data-manager-sort-dir]');
    if (!button) return;
    var isDesc = dirValue === 'desc';
    button.setAttribute('data-i18n-tooltip', 'manager.sort.dirHelp');
    button.textContent = isDesc ? '↓' : '↑';
    button.setAttribute('aria-label', t(isDesc ? 'manager.sort.dirDesc' : 'manager.sort.dirAsc'));
    button.setAttribute('data-sort-dir', isDesc ? 'desc' : 'asc');
  }

  function getCleanupThreshold() {
    var value = getStoredNumber(CLEANUP_THRESHOLD_KEY, CLEANUP_THRESHOLD_DEFAULT);
    return Math.min(95, Math.max(40, value));
  }

  function getCleanupDays() {
    var value = getStoredNumber(CLEANUP_DAYS_KEY, CLEANUP_DAYS_DEFAULT);
    return Math.min(365, Math.max(7, value));
  }

  function setCleanupThreshold(value) {
    var normalized = Math.min(95, Math.max(40, Number(value) || CLEANUP_THRESHOLD_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_THRESHOLD_KEY, String(normalized));
    } catch (err) {}
    if (cleanupThresholdInput) {
      cleanupThresholdInput.value = String(normalized);
    }
    if (cleanupThresholdValue) {
      cleanupThresholdValue.textContent = String(normalized);
    }
  }

  function setCleanupDays(value) {
    var normalized = Math.min(365, Math.max(7, Number(value) || CLEANUP_DAYS_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_DAYS_KEY, String(normalized));
    } catch (err) {}
    if (cleanupDaysInput) {
      cleanupDaysInput.value = String(normalized);
    }
  }

  function getInitialLang() {
    return getSavedLang() || normalizeLang(navigator.language || navigator.userLanguage || 'es');
  }

  function t(key, vars) {
    var table = I18N[currentLang] || I18N.es;
    var fallback = I18N.es;
    var parts = (key || '').split('.');
    var value = table;
    var fallbackValue = fallback;
    for (var i = 0; i < parts.length; i += 1) {
      if (value && typeof value === 'object' && parts[i] in value) {
        value = value[parts[i]];
      } else {
        value = null;
      }
      if (fallbackValue && typeof fallbackValue === 'object' && parts[i] in fallbackValue) {
        fallbackValue = fallbackValue[parts[i]];
      } else {
        fallbackValue = null;
      }
    }
    var resolved = value != null ? value : fallbackValue;
    if (typeof resolved !== 'string') {
      return resolved || '';
    }
    if (!vars) return resolved;
    return resolved.replace(/\{(\w+)\}/g, function (match, keyName) {
      if (vars && Object.prototype.hasOwnProperty.call(vars, keyName)) {
        return String(vars[keyName]);
      }
      return '';
    });
  }

  function applyTranslations() {
    var textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n');
      var value = t(key);
      if (value) {
        node.textContent = value;
      }
    });
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n-html');
      var value = t(key);
      if (value) {
        node.innerHTML = value;
      }
    });
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (node) {
      var key = node.getAttribute('data-i18n-placeholder');
      var value = t(key);
      if (value) {
        node.setAttribute('placeholder', value);
      }
    });
    var ariaLabels = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabels.forEach(function (node) {
      var key = node.getAttribute('data-i18n-aria-label');
      var value = t(key);
      if (value) {
        node.setAttribute('aria-label', value);
      }
    });
    var tooltips = document.querySelectorAll('[data-i18n-tooltip]');
    tooltips.forEach(function (node) {
      var key = node.getAttribute('data-i18n-tooltip');
      var value = t(key);
      if (value) {
        node.setAttribute('data-tooltip', value);
      }
    });
  }

  function getZipDefaultName() {
    return t('zipper.zipName.default') || 'materiales';
  }

  function syncZipNameDefault() {
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = getZipDefaultName();
    }
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    if (langSelect) {
      langSelect.value = currentLang;
    }
    if (languagePanel) {
      languagePanel.setAttribute('hidden', '');
    }
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (err) {
      // ignore persistence errors
    }
    document.documentElement.setAttribute('lang', currentLang);
    applyTranslations();
    updateServiceInfo();
    syncZipNameDefault();
    setCleanupThreshold(getCleanupThreshold());
    setCleanupDays(getCleanupDays());
    updateSortDirButton(getManagerSortDir());
    if (output && !currentShareLink) {
      output.textContent = t('main.output.placeholder');
    }
    if (!selectedFiles.length) {
      setUploadStatus(t('zipper.status.empty'));
      setZipStatus(t('zipper.status.readyHint'));
    } else {
      setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
      setZipStatus(t('zipper.status.ready'));
    }
    if (htmlZipInput) {
      if (htmlZipInput.value.trim()) {
        setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        setHtmlZipStatus(t('zipper.html.status.empty'));
      }
    }
    applyRestrictionUiState();
    updateRestrictionDefaults();
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = t('zipper.restrict.status.ready');
    }
    if (!loadingActive && loadingMessage) {
      loadingMessage.textContent = t('loading.message');
    }
    if (managerList) {
      refreshManager();
    }
  }

  function updateServiceInfo() {
    var info = SERVICE_INFO.default;
    if (input) {
      input.placeholder = t(info.placeholderKey);
    }
  }

  function setLoading(active) {
    loadingActive = !!active;
    if (loadingScreen) {
      if (active) {
        loadingScreen.removeAttribute('hidden');
      } else {
        loadingScreen.setAttribute('hidden', '');
      }
    }
    document.body.setAttribute('data-loading', active ? 'true' : 'false');
    if (!active) {
      stopProgress();
    }
  }

  function setLoadingMessage(message) {
    if (loadingMessage) {
      loadingMessage.textContent = message;
    }
  }

  function setLoadingEta(message) {
    if (loadingEta) {
      loadingEta.textContent = message;
    }
  }

  function setLoadingEtaVisible(visible) {
    if (!loadingEta) return;
    if (visible) {
      loadingEta.removeAttribute('hidden');
    } else {
      loadingEta.setAttribute('hidden', '');
    }
  }

  function setProgress(value) {
    if (!loadingBar) return;
    var percent = Math.max(0, Math.min(100, value));
    lastProgressValue = percent;
    loadingBar.style.width = percent + '%';
  }

  function startProgress(initial) {
    stopProgress();
    var current = initial || 5;
    setProgress(current);
    progressTimer = setInterval(function () {
      current = Math.min(current + 2, 85);
      setProgress(current);
    }, 600);
  }

  function stopProgress() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }
  function appBase() {
    var path = window.location.pathname;
    if (!path.endsWith('/')) {
      path = path.replace(/[^/]+$/, '');
    }
    return window.location.origin + path;
  }

  function setStatus(message) {
    output.textContent = message;
    if (loadingActive && !(message && /^https?:\/\//i.test(message))) {
      setLoadingMessage(message);
    }
  }

  function setShareLink(link) {
    currentShareLink = link || '';
    output.textContent = currentShareLink || t('main.output.placeholder');
    if (copyButton) {
      copyButton.disabled = !currentShareLink || !restrictionsAllowShare(currentRestrictions);
    }
    if (embedButton) {
      embedButton.disabled = !currentShareLink || !restrictionsAllowEmbed(currentRestrictions);
    }
    if (openLink) {
      openLink.href = currentShareLink || '#';
      openLink.setAttribute('aria-disabled', currentShareLink ? 'false' : 'true');
    }
    if (currentShareLink && stepThree && !isEmbedMode) {
      stepThree.scrollIntoView({ behavior: 'smooth', block: 'center' });
      stepThree.setAttribute('tabindex', '-1');
      stepThree.focus({ preventScroll: true });
    }
  }

  function flashMessage(message) {
    output.textContent = message;
    if (currentShareLink) {
      setTimeout(function () {
        output.textContent = currentShareLink;
      }, 1500);
    }
  }

  function showInlineToast(button, message) {
    if (!button) return;
    var existing = button.querySelector('.inline-toast');
    var bubble = existing || document.createElement('span');
    bubble.className = 'inline-toast';
    bubble.textContent = message;
    if (!existing) {
      button.appendChild(bubble);
    }
    button.classList.add('show-toast');
    if (inlineToastTimer) {
      clearTimeout(inlineToastTimer);
    }
    inlineToastTimer = setTimeout(function () {
      button.classList.remove('show-toast');
    }, 1300);
  }

  function formatUserError(err) {
    var message = (err && err.message) ? err.message : '';
    if (/no devolvio un ZIP|recibio HTML|devolvio HTML/i.test(message)) {
      return t('error.driveTooLarge');
    }
    return message || t('error.loadZip');
  }

  function closeHtmlPicker(message) {
    if (!htmlModal) return;
    htmlModal.setAttribute('hidden', '');
    if (htmlList) {
      htmlList.innerHTML = '';
    }
    if (htmlPickerReject) {
      var reject = htmlPickerReject;
      htmlPickerResolve = null;
      htmlPickerReject = null;
      reject(new Error(message || t('error.noHtmlSelected')));
    }
  }

  function confirmHtmlPicker() {
    if (!htmlList || !htmlPickerResolve) return;
    var choice = htmlList.querySelector('input[name="html-choice"]:checked');
    if (!choice) {
      return;
    }
    var resolve = htmlPickerResolve;
    htmlPickerResolve = null;
    htmlPickerReject = null;
    htmlModal.setAttribute('hidden', '');
    htmlList.innerHTML = '';
    resolve(choice.value);
  }

  function openHtmlPicker(htmlPaths, preferred) {
    if (!htmlModal || !htmlList || !htmlConfirm) {
      return Promise.reject(new Error(t('error.htmlPickerOpen')));
    }
    return new Promise(function (resolve, reject) {
      htmlPickerResolve = resolve;
      htmlPickerReject = reject;
      if (loadingActive) {
        htmlPickerWasLoading = true;
        setLoading(false);
      }
      htmlList.innerHTML = '';
      htmlPaths.forEach(function (path, index) {
        var id = 'html-choice-' + index;
        var label = document.createElement('label');
        label.className = 'html-option';
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'html-choice';
        input.value = path;
        input.id = id;
        if ((preferred && preferred === path) || (!preferred && index === 0)) {
          input.checked = true;
        }
        var text = document.createElement('span');
        text.textContent = path;
        label.appendChild(input);
        label.appendChild(text);
        htmlList.appendChild(label);
      });
      htmlModal.removeAttribute('hidden');
    });
  }

  function setUploadStatus(message) {
    if (uploadStatus) {
      uploadStatus.textContent = message;
    }
  }

  function setZipStatus(message) {
    if (zipStatus) {
      zipStatus.textContent = message;
    }
  }

  function setHtmlZipStatus(message) {
    if (htmlZipStatus) {
      htmlZipStatus.textContent = message;
    }
  }

  function resetZipDownload() {
    // No-op: downloads are triggered immediately after ZIP creation.
  }

  function updateSelectedFiles(files) {
    selectedFiles = files || [];
    resetZipDownload();
    if (!selectedFiles.length) {
      setUploadStatus(t('zipper.status.empty'));
      setZipStatus(t('zipper.status.readyHint'));
      if (zipNameInput && !zipNameDirty) {
        zipNameInput.value = getZipDefaultName();
      }
      return;
    }
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = deriveZipBaseName(selectedFiles);
    }
    setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
    setZipStatus(t('zipper.status.ready'));
  }

  function normalizeZipName(name) {
    var value = (name || '').trim() || getZipDefaultName();
    if (!/\.zip$/i.test(value)) {
      value += '.zip';
    }
    return value;
  }

  function encodeUtf8(text) {
    if (window.TextEncoder) {
      return new TextEncoder().encode(text);
    }
    var utf8 = unescape(encodeURIComponent(text));
    var bytes = new Uint8Array(utf8.length);
    for (var i = 0; i < utf8.length; i += 1) {
      bytes[i] = utf8.charCodeAt(i);
    }
    return bytes;
  }

  function decodeUtf8(bytes) {
    if (window.TextDecoder) {
      return new TextDecoder('utf-8').decode(bytes);
    }
    var out = '';
    for (var i = 0; i < bytes.length; i += 1) {
      out += String.fromCharCode(bytes[i]);
    }
    try {
      return decodeURIComponent(escape(out));
    } catch (e) {
      return out;
    }
  }

  function formatLocalDateTime(value) {
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return value.getFullYear()
      + '-' + pad(value.getMonth() + 1)
      + '-' + pad(value.getDate())
      + 'T' + pad(value.getHours())
      + ':' + pad(value.getMinutes());
  }

  function formatRestrictionDate(value) {
    if (!value) return '';
    var date = new Date(value);
    if (isNaN(date.getTime())) return '';
    try {
      return date.toLocaleString(currentLang);
    } catch (e) {
      return date.toISOString();
    }
  }

  function formatCountdown(ms) {
    var totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    var days = Math.floor(totalSeconds / 86400);
    var remainder = totalSeconds % 86400;
    var hours = Math.floor(remainder / 3600);
    var minutes = Math.floor((remainder % 3600) / 60);
    var seconds = remainder % 60;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var time = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    return days > 0 ? (days + 'd ' + time) : time;
  }

  function deriveZipBaseName(files) {
    if (!files || !files.length) return getZipDefaultName();
    var firstPath = files[0].path || '';
    if (!firstPath) return getZipDefaultName();
    var parts = firstPath.split('/');
    if (parts.length > 1) {
      var root = parts[0];
      var sameRoot = files.every(function (item) {
        return item.path && item.path.indexOf(root + '/') === 0;
      });
      if (sameRoot) {
        return root;
      }
    }
    var filename = parts[parts.length - 1] || getZipDefaultName();
    return filename.replace(/\.[^/.]+$/, '') || getZipDefaultName();
  }

  function deriveTitleFromPath(path) {
    if (!path) return '';
    var trimmed = path.replace(/[#?].*$/, '');
    var parts = trimmed.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function deriveTitleFromUrl(url) {
    if (!url) return '';
    var cleaned = url.replace(/[#?].*$/, '');
    var parts = cleaned.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function readBlobText(blob) {
    if (!blob) return Promise.resolve('');
    if (blob.text) {
      return blob.text().catch(function () { return ''; });
    }
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result || '');
      };
      reader.onerror = function () {
        resolve('');
      };
      reader.readAsText(blob);
    });
  }

  function extractTitleFromFiles(files, indexPath) {
    if (!files || !files.length || !indexPath) return Promise.resolve('');
    var target = null;
    for (var i = 0; i < files.length; i += 1) {
      if (files[i].path === indexPath) {
        target = files[i];
        break;
      }
    }
    if (!target || !target.blob) return Promise.resolve('');
    return readBlobText(target.blob).then(function (text) {
      var title = '';
      if (typeof DOMParser !== 'undefined') {
        try {
          var doc = new DOMParser().parseFromString(text, 'text/html');
          title = doc && doc.title ? doc.title : '';
        } catch (err) {
          title = '';
        }
      }
      if (!title) {
        var match = text.match(/<title[^>]*>([^<]*)<\/title>/i);
        title = match ? match[1] : '';
      }
      title = (title || '').replace(/\s+/g, ' ').trim();
      return title;
    });
  }

  function collectFilesFromInput(fileList) {
    var files = [];
    Array.prototype.forEach.call(fileList || [], function (file) {
      var path = file.webkitRelativePath || file.name || '';
      if (!path) return;
      path = path.replace(/^\//, '');
      files.push({ path: path, file: file });
    });
    updateSelectedFiles(files);
  }

  function readFileEntry(entry, basePath) {
    return new Promise(function (resolve, reject) {
      entry.file(function (file) {
        var path = (basePath || '') + (file.name || '');
        resolve([{ path: path, file: file }]);
      }, reject);
    });
  }

  function readAllEntries(reader) {
    return new Promise(function (resolve, reject) {
      var entries = [];
      var readBatch = function () {
        reader.readEntries(function (batch) {
          if (!batch.length) {
            resolve(entries);
            return;
          }
          entries = entries.concat(batch);
          readBatch();
        }, reject);
      };
      readBatch();
    });
  }

  function readDirectoryEntry(entry, basePath) {
    var reader = entry.createReader();
    return readAllEntries(reader).then(function (entries) {
      var prefix = (basePath || '') + entry.name + '/';
      var promises = entries.map(function (child) {
        return readEntry(child, prefix);
      });
      return Promise.all(promises).then(function (nested) {
        return nested.reduce(function (acc, group) {
          return acc.concat(group);
        }, []);
      });
    });
  }

  function readEntry(entry, basePath) {
    if (entry.isFile) {
      return readFileEntry(entry, basePath);
    }
    if (entry.isDirectory) {
      return readDirectoryEntry(entry, basePath);
    }
    return Promise.resolve([]);
  }

  function collectFilesFromDrop(event) {
    var items = event.dataTransfer && event.dataTransfer.items;
    if (items && items.length) {
      var entries = [];
      Array.prototype.forEach.call(items, function (item) {
        if (!item.webkitGetAsEntry) return;
        var entry = item.webkitGetAsEntry();
        if (entry) {
          entries.push(entry);
        }
      });
      if (entries.length) {
        return Promise.all(entries.map(function (entry) {
          return readEntry(entry, '');
        })).then(function (nested) {
          var files = nested.reduce(function (acc, group) {
            return acc.concat(group);
          }, []);
          updateSelectedFiles(files);
        });
      }
    }
    collectFilesFromInput(event.dataTransfer.files || []);
    return Promise.resolve();
  }

  function buildZipFromSelection() {
    if (!selectedFiles.length) {
      setZipStatus(t('zipper.status.selectFirst'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      setZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = normalizeZipName(zipNameInput ? zipNameInput.value : '');
    setZipStatus(t('zipper.status.creating'));
    var tasks = selectedFiles.map(function (item) {
      return item.file.arrayBuffer().then(function (buffer) {
        return {
          path: item.path,
          data: new Uint8Array(buffer)
        };
      });
    });
    Promise.all(tasks).then(function (entries) {
      var files = {};
      entries.forEach(function (entry) {
        if (entry.path) {
          files[entry.path] = entry.data;
        }
      });
      var restrictions = buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var url = URL.createObjectURL(blob);
      var anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
      setZipStatus(t('zipper.status.downloaded'));
    }).catch(function () {
      setZipStatus(t('zipper.status.failed'));
    });
  }

  function buildZipFromHtml() {
    var htmlText = htmlZipInput ? htmlZipInput.value.trim() : '';
    if (!htmlText) {
      setHtmlZipStatus(t('zipper.html.status.empty'));
      return;
    }
    if (looksLikeReactJsx(htmlText)) {
      setHtmlZipStatus(t('zipper.html.status.reactDetected'));
      openReactPromptModal(htmlText);
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      setHtmlZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = normalizeZipName(zipNameInput ? zipNameInput.value : '');
    setHtmlZipStatus(t('zipper.html.status.creating'));
    try {
      var files = {
        'index.html': encodeUtf8(htmlText)
      };
      var restrictions = buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      URL.revokeObjectURL(anchor.href);
      document.body.removeChild(anchor);
      setHtmlZipStatus(t('zipper.html.status.downloaded'));
    } catch (err) {
      setHtmlZipStatus(t('zipper.html.status.failed'));
    }
  }

  function downloadZipBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function applyRestrictionsToZipFile(file) {
    if (!file) return;
    if (!window.fflate || !window.fflate.unzipSync || !window.fflate.zipSync) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      return;
    }
    var restrictions = buildRestrictionsPayload();
    if (!restrictions) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      return;
    }
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = t('zipper.restrict.status.working');
    }
    file.arrayBuffer().then(function (buffer) {
      var entries = window.fflate.unzipSync(new Uint8Array(buffer));
      entries['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      var zipped = window.fflate.zipSync(entries);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var name = file.name || 'site.zip';
      if (/\.elpx$/i.test(name)) {
        name = name.replace(/\.elpx$/i, '-restricciones.elpx');
      } else if (/\.zip$/i.test(name)) {
        name = name.replace(/\.zip$/i, '-restricciones.zip');
      } else {
        name += '-restricciones.zip';
      }
      downloadZipBlob(blob, name);
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.done');
      }
    }).catch(function () {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
    });
  }

  function looksLikeHtmlDocument(text) {
    var head = String(text || '').slice(0, 600);
    return /^\s*<!doctype\s+html\b/i.test(head) || /^\s*<html\b/i.test(head);
  }

  function looksLikeReactJsx(text) {
    var value = String(text || '');
    if (looksLikeHtmlDocument(value)) return false;
    var sample = value.slice(0, 6000);
    if (/\bimport\s+React\b/.test(sample)) return true;
    if (/\bfrom\s+['"]react['"]/.test(sample)) return true;
    if (/\breact-dom\b/.test(sample) && /\bcreateRoot\s*\(/.test(sample)) return true;
    if (/\buseState\s*\(/.test(sample) || /\buseEffect\s*\(/.test(sample)) {
      if (/\breturn\s*\(\s*<[\w]/.test(sample) || /\bclassName\s*=/.test(sample)) {
        return true;
      }
    }
    if (/\bexport\s+default\b/.test(sample) && /\breturn\s*\(\s*<[\w]/.test(sample)) return true;
    return false;
  }

  function applyRestrictionUiState() {
    var enabled = !!(restrictionToggle && restrictionToggle.checked);
    if (restrictionFields) {
      if (enabled) restrictionFields.removeAttribute('hidden');
      else restrictionFields.setAttribute('hidden', '');
    }
    if (restrictionActions) {
      if (enabled) restrictionActions.removeAttribute('hidden');
      else restrictionActions.setAttribute('hidden', '');
    }
    var restrictTitle = document.querySelector('[data-restrict-actions-title]');
    if (restrictTitle) {
      if (enabled) restrictTitle.removeAttribute('hidden');
      else restrictTitle.setAttribute('hidden', '');
    }
    var restrictNote = document.querySelector('[data-restrict-actions-note]');
    if (restrictNote) {
      if (enabled) restrictNote.removeAttribute('hidden');
      else restrictNote.setAttribute('hidden', '');
    }
    if (restrictionHint) {
      if (enabled) restrictionHint.removeAttribute('hidden');
      else restrictionHint.setAttribute('hidden', '');
    }
    if (restrictionAccordion) {
      if (enabled) restrictionAccordion.removeAttribute('hidden');
      else restrictionAccordion.setAttribute('hidden', '');
    }
    if (restrictionNoEnd && restrictionEndInput) {
      restrictionEndInput.disabled = restrictionNoEnd.checked;
    }
    if (restrictionZipApply) {
      restrictionZipApply.disabled = !enabled || !restrictionZipFile;
    }
    var lockSvg = enabled
      ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
      : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>';
    var lockTargets = document.querySelectorAll('[data-lock-indicator], [data-main-settings-open]');
    lockTargets.forEach(function (target) {
      var icon = target.querySelector('svg');
      if (icon) {
        icon.innerHTML = lockSvg;
      }
      if (enabled) {
        target.classList.add('is-locked');
        target.classList.remove('is-unlocked');
      } else {
        target.classList.remove('is-locked');
        target.classList.add('is-unlocked');
      }
    });
  }

  function updateRestrictionDefaults() {
    if (!restrictionStartInput || !restrictionEndInput) return;
    var now = new Date();
    if (!restrictionStartInput.value) {
      restrictionStartInput.value = formatLocalDateTime(now);
    }
    if (restrictionNoEnd && restrictionNoEnd.checked) {
      restrictionEndInput.value = '';
    }
  }

  function buildRestrictionsPayload() {
    if (!restrictionToggle || !restrictionToggle.checked) return null;
    updateRestrictionDefaults();
    var startValue = restrictionStartInput ? restrictionStartInput.value : '';
    var endValue = restrictionEndInput ? restrictionEndInput.value : '';
    var startAt = startValue ? new Date(startValue).toISOString() : new Date().toISOString();
    var neverExpires = !!(restrictionNoEnd && restrictionNoEnd.checked);
    var endAt = null;
    if (!neverExpires && endValue) {
      endAt = new Date(endValue).toISOString();
    }
    return {
      version: 1,
      enabled: true,
      startAt: startAt,
      endAt: endAt,
      neverExpires: neverExpires,
      allowShare: !!(restrictionAllowShare && restrictionAllowShare.checked),
      allowEmbed: !!(restrictionAllowEmbed && restrictionAllowEmbed.checked),
      allowDownload: !!(restrictionAllowDownload && restrictionAllowDownload.checked),
      createdAt: new Date().toISOString(),
      source: 'visor-webzip'
    };
  }

  function isRestrictionActive(restrictions) {
    return restrictions && restrictions.enabled;
  }

  function isRestrictionAllowedNow(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    var now = Date.now();
    if (restrictions.startAt) {
      var start = Date.parse(restrictions.startAt);
      if (!isNaN(start) && now < start) return false;
    }
    if (restrictions.neverExpires) return true;
    if (restrictions.endAt) {
      var end = Date.parse(restrictions.endAt);
      if (!isNaN(end) && now > end) return false;
    }
    return true;
  }

  function isRestrictionExpired(restrictions) {
    if (!restrictions || !restrictions.enabled) return false;
    if (restrictions.neverExpires) return false;
    if (!restrictions.endAt) return false;
    var end = Date.parse(restrictions.endAt);
    if (isNaN(end)) return false;
    return Date.now() > end;
  }

  function isRestrictionBeforeStart(restrictions) {
    if (!restrictions || !restrictions.enabled) return false;
    if (!restrictions.startAt) return false;
    var start = Date.parse(restrictions.startAt);
    if (isNaN(start)) return false;
    return Date.now() < start;
  }

  function restrictionsAllowShare(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowShare;
  }

  function restrictionsAllowEmbed(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowEmbed;
  }

  function restrictionsAllowDownload(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowDownload;
  }

  function extractRestrictions(entries) {
    if (!entries || !entries['restrictions.json']) return null;
    try {
      var raw = decodeUtf8(entries['restrictions.json']);
      var data = JSON.parse(raw);
      if (data && data.enabled) return data;
    } catch (e) {
      // ignore invalid restrictions
    }
    return null;
  }

  function applyRestrictionsToActions(restrictions) {
    currentRestrictions = restrictions || null;
    if (ignoreRestrictionsForShare) return;
    if (copyButton) {
      copyButton.disabled = !currentShareLink || !restrictionsAllowShare(currentRestrictions);
    }
    if (embedButton) {
      embedButton.disabled = !currentShareLink || !restrictionsAllowEmbed(currentRestrictions);
    }
  }

  function showRestrictionModal(restrictions) {
    if (ignoreRestrictionsForShare) return;
    if (!restrictModal) return;
    if (restrictCountdownTimer) {
      clearInterval(restrictCountdownTimer);
      restrictCountdownTimer = null;
    }
    if (restrictionCountdown) {
      restrictionCountdown.textContent = '';
      restrictionCountdown.setAttribute('hidden', '');
    }
    var lines = [];
    if (restrictions && restrictions.startAt) {
      var startText = formatRestrictionDate(restrictions.startAt);
      if (startText) lines.push(t('restrictionModal.rangeStart', { date: startText }));
    }
    if (restrictions && restrictions.neverExpires) {
      lines.push(t('restrictionModal.rangeNoEnd'));
    } else if (restrictions && restrictions.endAt) {
      var endText = formatRestrictionDate(restrictions.endAt);
      if (endText) lines.push(t('restrictionModal.rangeEnd', { date: endText }));
    }
    if (restrictRange) {
      restrictRange.textContent = lines.join(' · ');
    }
    restrictModal.removeAttribute('hidden');

    if (restrictions && restrictions.startAt && isRestrictionBeforeStart(restrictions)) {
      var updateCountdown = function () {
        var remaining = Date.parse(restrictions.startAt) - Date.now();
        if (remaining <= 0) {
          if (restrictCountdownTimer) {
            clearInterval(restrictCountdownTimer);
            restrictCountdownTimer = null;
          }
          restrictModal.setAttribute('hidden', '');
          if (window.location.search.indexOf('url=') !== -1) {
            var previewUrl = currentZipUrl || urlParam;
            if (previewUrl) {
              loadZip(previewUrl, { force: false, autoOpen: true });
            }
          }
          return;
        }
        var countdownText = formatCountdown(remaining);
        if (restrictionCountdown) {
          restrictionCountdown.textContent = t('restrictionModal.countdown', { time: countdownText });
          restrictionCountdown.removeAttribute('hidden');
        }
      };
      updateCountdown();
      restrictCountdownTimer = setInterval(updateCountdown, 1000);
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return Promise.reject(new Error(t('error.serviceWorkerUnavailable')));
    }
    return navigator.serviceWorker.register('sw.js', { scope: './' }).then(function () {
      return navigator.serviceWorker.ready;
    });
  }

  function waitForServiceWorkerControl() {
    if (!('serviceWorker' in navigator)) {
      return Promise.resolve();
    }
    if (navigator.serviceWorker.controller) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var resolved = false;
      var finish = function () {
        if (resolved) return;
        resolved = true;
        navigator.serviceWorker.removeEventListener('controllerchange', onChange);
        resolve();
      };
      var onChange = function () {
        if (navigator.serviceWorker.controller) {
          finish();
        }
      };
      navigator.serviceWorker.addEventListener('controllerchange', onChange);
      setTimeout(finish, 5000);
    });
  }

  function openDb() {
    return new Promise(function (resolve, reject) {
      var request = window.indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = function () {
        var db = request.result;
        if (!db.objectStoreNames.contains(STORE_SITES)) {
          db.createObjectStore(STORE_SITES, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_FILES)) {
          var store = db.createObjectStore(STORE_FILES, { keyPath: 'key' });
          store.createIndex('siteId', 'siteId', { unique: false });
        }
      };
      request.onsuccess = function () {
        resolve(request.result);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function withStore(storeName, mode, action) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeName, mode);
        var store = tx.objectStore(storeName);
        var request = action(store);
        request.onsuccess = function () {
          resolve(request.result);
        };
        request.onerror = function () {
          reject(request.error);
        };
      });
    });
  }

  function getSite(siteId) {
    return withStore(STORE_SITES, 'readonly', function (store) {
      return store.get(siteId);
    });
  }

  function saveSite(site) {
    return withStore(STORE_SITES, 'readwrite', function (store) {
      return store.put(site);
    });
  }

  function getAllSites() {
    return withStore(STORE_SITES, 'readonly', function (store) {
      return store.getAll();
    }).then(function (sites) {
      return sites || [];
    });
  }

  function saveFiles(files) {
    if (!files.length) {
      return Promise.resolve();
    }
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE_FILES, 'readwrite');
        var store = tx.objectStore(STORE_FILES);
        files.forEach(function (file) {
          store.put(file);
        });
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function deleteSite(siteId) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction([STORE_SITES, STORE_FILES], 'readwrite');
        tx.objectStore(STORE_SITES).delete(siteId);
        var fileStore = tx.objectStore(STORE_FILES);
        var index = fileStore.index('siteId');
        var request = index.getAllKeys(IDBKeyRange.only(siteId));
        request.onsuccess = function () {
          var keys = request.result || [];
          keys.forEach(function (key) {
            fileStore.delete(key);
          });
        };
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function normalizePath(path) {
    return path.replace(/\\/g, '/').replace(/^\.?\//, '');
  }

  function guessMimeType(path) {
    var lower = path.toLowerCase();
    if (lower.endsWith('.html') || lower.endsWith('.htm')) return 'text/html';
    if (lower.endsWith('.css')) return 'text/css';
    if (lower.endsWith('.js')) return 'text/javascript';
    if (lower.endsWith('.json')) return 'application/json';
    if (lower.endsWith('.svg')) return 'image/svg+xml';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    if (lower.endsWith('.gif')) return 'image/gif';
    if (lower.endsWith('.webp')) return 'image/webp';
    if (lower.endsWith('.woff')) return 'font/woff';
    if (lower.endsWith('.woff2')) return 'font/woff2';
    if (lower.endsWith('.ttf')) return 'font/ttf';
    if (lower.endsWith('.otf')) return 'font/otf';
    if (lower.endsWith('.ico')) return 'image/x-icon';
    if (lower.endsWith('.mp3')) return 'audio/mpeg';
    if (lower.endsWith('.mp4')) return 'video/mp4';
    if (lower.endsWith('.webm')) return 'video/webm';
    return 'application/octet-stream';
  }

  function extractDriveId(url) {
    var match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    match = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    match = url.match(/drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  }

  function normalizeZipUrl(url) {
    var driveId = extractDriveId(url);
    if (driveId) {
      return 'https://drive.google.com/uc?export=download&id=' + driveId;
    }
    if (url.indexOf('dropbox.com') !== -1) {
      return url.replace(/([?&])dl=0\b/, '$1dl=1');
    }
    var isNextcloud = false;
    var host = '';
    var path = '';
    try {
      var parsed = new URL(url);
      host = parsed.hostname || '';
      path = parsed.pathname || '';
    } catch (e) {
      // Ignore invalid URLs; fall back to simple checks.
      path = url;
    }
    var looksLikeNextcloud = path.indexOf('/s/') !== -1 && host.indexOf('drive.google.com') === -1;
    if (isNextcloud || looksLikeNextcloud) {
      if (url.indexOf('/download') === -1 && url.indexOf('download=1') === -1) {
        var parts = url.split('#');
        var baseAndQuery = parts[0];
        var hash = parts.length > 1 ? '#' + parts.slice(1).join('#') : '';
        var queryIndex = baseAndQuery.indexOf('?');
        var base = queryIndex === -1 ? baseAndQuery : baseAndQuery.slice(0, queryIndex);
        var query = queryIndex === -1 ? '' : baseAndQuery.slice(queryIndex);
        base = base.replace(/\/$/, '') + '/download';
        return base + query + hash;
      }
    }
    return url;
  }

  function sha1Hex(value) {
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      return Promise.reject(new Error(t('error.sha1Unavailable')));
    }
    var data = new TextEncoder().encode(value);
    return window.crypto.subtle.digest('SHA-1', data).then(function (hash) {
      var bytes = Array.from(new Uint8Array(hash));
      return bytes.map(function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function computeSiteId(zipUrl) {
    return sha1Hex(normalizeZipUrl(zipUrl));
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    var units = (I18N[currentLang] && I18N[currentLang].units) ? I18N[currentLang].units : I18N.es.units;
    var idx = 0;
    var value = bytes;
    while (value >= 1024 && idx < units.length - 1) {
      value /= 1024;
      idx += 1;
    }
    return value.toFixed(value >= 10 || idx === 0 ? 0 : 1) + ' ' + units[idx];
  }

  function sumSiteBytes(sites) {
    return sites.reduce(function (sum, site) {
      return sum + (site.totalBytes || 0);
    }, 0);
  }

  function estimateStorage() {
    if (navigator.storage && navigator.storage.estimate) {
      return navigator.storage.estimate().catch(function () {
        return null;
      });
    }
    return Promise.resolve(null);
  }

  function deleteSitesSequential(siteIds) {
    return siteIds.reduce(function (promise, siteId) {
      return promise.then(function () {
        return deleteSite(siteId);
      });
    }, Promise.resolve());
  }

  function chooseOldestSites(sites, targetBytes) {
    var sorted = sites.slice().sort(function (a, b) {
      return (a.updatedAt || 0) - (b.updatedAt || 0);
    });
    var total = sumSiteBytes(sorted);
    var toDelete = [];
    for (var i = 0; i < sorted.length && total > targetBytes; i += 1) {
      var site = sorted[i];
      total -= site.totalBytes || 0;
      toDelete.push(site.id);
    }
    return toDelete;
  }

  function ensureStorageCapacity(extraBytes) {
    return Promise.all([getAllSites(), estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var quota = estimate && estimate.quota ? estimate.quota : 0;
      var usage = estimate && estimate.usage ? estimate.usage : sumSiteBytes(sites);
      if (!quota) {
        return true;
      }
      var projected = usage + (extraBytes || 0);
      var limit = quota * (getCleanupThreshold() / 100);
      if (projected < limit) {
        return true;
      }
      var target = Math.max(0, limit - (extraBytes || 0));
      var toDelete = chooseOldestSites(sites, target);
      if (!toDelete.length) return false;
      return deleteSitesSequential(toDelete).then(function () {
        return ensureStorageCapacity(extraBytes);
      });
    });
  }

  function cleanupOldSites() {
    var cutoff = Date.now() - getCleanupDays() * 24 * 60 * 60 * 1000;
    return getAllSites().then(function (sites) {
      var oldIds = sites.filter(function (site) {
        return site.updatedAt && site.updatedAt < cutoff;
      }).map(function (site) { return site.id; });
      if (!oldIds.length) return;
      return deleteSitesSequential(oldIds);
    });
  }

  function renderManagerList(sites) {
    if (!managerList) return;
    managerList.innerHTML = '';
    if (!sites.length) {
      var managerToolbar = document.querySelector('.manager-toolbar');
      if (managerToolbar) {
        managerToolbar.setAttribute('hidden', '');
      }
      var empty = document.createElement('p');
      empty.textContent = t('manager.empty');
      managerList.appendChild(empty);
      return;
    }
    var managerToolbar = document.querySelector('.manager-toolbar');
    if (managerToolbar) {
      managerToolbar.removeAttribute('hidden');
    }
    var sortedSites = sortManagerSites(sites);
    sortedSites.forEach(function (site) {
      var restrictions = site.restrictions || null;
      var canShare = restrictionsAllowShare(restrictions);
      var canEmbed = restrictionsAllowEmbed(restrictions);
      var canView = !isRestrictionBeforeStart(restrictions);
      var canDownload = restrictionsAllowDownload(restrictions);
      var item = document.createElement('div');
      item.className = 'manager-item';
      var info = document.createElement('div');
      var title = document.createElement('div');
      title.className = 'manager-item__title';
      title.setAttribute('data-title', 'true');
      var displayTitle = site.title || deriveTitleFromPath(site.indexPath) || site.url || t('manager.siteNoUrl');
      title.textContent = displayTitle;
      var meta = document.createElement('div');
      meta.className = 'manager-item__meta';
      var date = site.updatedAt ? new Date(site.updatedAt).toLocaleString(currentLang) : t('manager.noDate');
      meta.textContent = formatBytes(site.totalBytes || 0) + ' · ' + date;
      if (restrictions && restrictions.enabled) {
        var badge = document.createElement('span');
        badge.className = 'manager-badge';
        var startLabel = restrictions.startAt ? formatRestrictionDate(restrictions.startAt) : '';
        var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? formatRestrictionDate(restrictions.endAt) : '';
        var openText = startLabel ? t('manager.badges.opening', { date: startLabel }) : '';
        var closeText = endLabel ? t('manager.badges.closing', { date: endLabel }) : '';
        if (openText && closeText) {
          badge.textContent = openText + ' · ' + closeText;
        } else if (openText) {
          badge.textContent = openText;
        } else if (closeText) {
          badge.textContent = closeText;
        } else {
          badge.textContent = t('manager.badges.scheduled');
        }
        meta.appendChild(badge);
      }
      info.appendChild(title);
      if (site.url && displayTitle !== site.url) {
        var urlLine = document.createElement('div');
        urlLine.className = 'manager-item__url';
        urlLine.textContent = site.url;
        info.appendChild(urlLine);
      }
      info.appendChild(meta);
      var actions = document.createElement('div');
      actions.className = 'manager-item__actions';
      var viewButton = document.createElement('button');
      viewButton.type = 'button';
      viewButton.className = 'icon-button';
      viewButton.setAttribute('data-action', 'view');
      viewButton.setAttribute('data-site-id', site.id);
      viewButton.setAttribute('data-index-path', site.indexPath || '');
      viewButton.setAttribute('aria-label', t('manager.actions.view'));
      viewButton.setAttribute('data-tooltip', t('manager.actions.view'));
      viewButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7-10.5-7-10.5-7z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>';
      actions.appendChild(viewButton);
      viewButton.disabled = !canView;
      var shareButton = document.createElement('button');
      shareButton.type = 'button';
      shareButton.className = 'icon-button';
      shareButton.setAttribute('data-action', 'share');
      shareButton.setAttribute('data-zip-url', site.url || '');
      shareButton.setAttribute('aria-label', t('manager.actions.share'));
      shareButton.setAttribute('data-tooltip', t('manager.actions.share'));
      shareButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 10.7l6.8-3.4"></path><path d="M8.6 13.3l6.8 3.4"></path></svg>';
      actions.appendChild(shareButton);
      shareButton.disabled = !site.url || !canShare;
      var embedManagerButton = document.createElement('button');
      embedManagerButton.type = 'button';
      embedManagerButton.className = 'icon-button';
      embedManagerButton.setAttribute('data-action', 'embed');
      embedManagerButton.setAttribute('data-zip-url', site.url || '');
      embedManagerButton.setAttribute('aria-label', t('manager.actions.embed'));
      embedManagerButton.setAttribute('data-tooltip', t('manager.actions.embed'));
      embedManagerButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path><path d="M14 4l-4 16"></path></svg>';
      actions.appendChild(embedManagerButton);
      embedManagerButton.disabled = !site.url || !canEmbed;
      var editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'icon-button';
      editButton.setAttribute('data-action', 'edit');
      editButton.setAttribute('data-site-id', site.id);
      editButton.setAttribute('aria-label', t('manager.actions.edit'));
      editButton.setAttribute('data-tooltip', t('manager.actions.edit'));
      editButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>';
      actions.appendChild(editButton);
      var downloadButton = document.createElement('button');
      downloadButton.type = 'button';
      downloadButton.className = 'icon-button';
      downloadButton.setAttribute('data-action', 'download');
      downloadButton.setAttribute('data-zip-url', site.url || '');
      downloadButton.setAttribute('aria-label', t('manager.actions.download'));
      downloadButton.setAttribute('data-tooltip', t('manager.actions.download'));
      downloadButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v10"></path><path d="M7 9l5 5 5-5"></path><path d="M5 21h14"></path></svg>';
      actions.appendChild(downloadButton);
      downloadButton.disabled = !site.url || !canDownload;
      var delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.className = 'icon-button';
      delButton.setAttribute('data-action', 'delete');
      delButton.setAttribute('data-site-id', site.id);
      delButton.setAttribute('aria-label', t('common.delete'));
      delButton.setAttribute('data-tooltip', t('common.delete'));
      delButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>';
      actions.appendChild(delButton);
      item.appendChild(info);
      item.appendChild(actions);
      managerList.appendChild(item);
    });
  }

  function refreshManager() {
    return Promise.all([getAllSites(), estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var expiredIds = sites.filter(function (site) {
        return isRestrictionActive(site.restrictions) && isRestrictionExpired(site.restrictions);
      }).map(function (site) { return site.id; });
      if (expiredIds.length) {
        return deleteSitesSequential(expiredIds).then(function () {
          return refreshManager();
        });
      }
      var totalBytes = sumSiteBytes(sites);
      if (storageUsed) {
        storageUsed.textContent = formatBytes(totalBytes);
      }
      if (storageUsedPercent) {
        var quota = estimate && estimate.quota ? estimate.quota : 0;
        if (quota) {
          var percent = Math.min(100, Math.round((totalBytes / quota) * 100));
          storageUsedPercent.textContent = percent + '%';
        } else {
          storageUsedPercent.textContent = '--';
        }
      }
      if (storageTotal) {
        storageTotal.textContent = estimate && estimate.quota ? formatBytes(estimate.quota) : '--';
      }
      if (storageCount) {
        storageCount.textContent = String(sites.length);
      }
      renderManagerList(sites);
    });
  }

  function sortManagerSites(sites) {
    var key = getManagerSort();
    var direction = getManagerSortDir();
    var factor = direction === 'desc' ? -1 : 1;
    var collator = new Intl.Collator(currentLang, { sensitivity: 'base', numeric: true });
    return sites.slice().sort(function (a, b) {
      if (key === 'date') {
        var aDate = a.updatedAt || 0;
        var bDate = b.updatedAt || 0;
        return (aDate - bDate) * factor;
      }
      if (key === 'size') {
        var aSize = a.totalBytes || 0;
        var bSize = b.totalBytes || 0;
        return (aSize - bSize) * factor;
      }
      var aTitle = a.title || deriveTitleFromPath(a.indexPath) || a.url || '';
      var bTitle = b.title || deriveTitleFromPath(b.indexPath) || b.url || '';
      return collator.compare(aTitle, bTitle) * factor;
    });
  }

  function closeActiveTitleEdit() {
    if (!activeTitleEdit) return;
    var input = activeTitleEdit.input;
    var titleEl = activeTitleEdit.titleEl;
    if (input && input.parentNode) {
      input.parentNode.replaceChild(titleEl, input);
    }
    activeTitleEdit = null;
  }

  function startTitleEdit(siteId, titleEl) {
    if (!siteId || !titleEl) return;
    if (activeTitleEdit && activeTitleEdit.siteId === siteId) return;
    closeActiveTitleEdit();
    var currentText = titleEl.textContent || '';
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'manager-item__title-edit';
    input.value = currentText;
    titleEl.parentNode.replaceChild(input, titleEl);
    input.focus();
    input.select();
    activeTitleEdit = { siteId: siteId, input: input, titleEl: titleEl };

    var save = function () {
      var value = input.value.trim().replace(/\s+/g, ' ');
      getSite(siteId).then(function (site) {
        if (!site) return;
        site.title = value;
        return saveSite(site).then(function () {
          refreshManager();
        });
      }).finally(function () {
        closeActiveTitleEdit();
      });
    };

    input.addEventListener('blur', function () {
      save();
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        save();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeActiveTitleEdit();
      }
    });
  }

  function setActiveTab(name) {
    document.body.setAttribute('data-active-tab', name);
    tabButtons.forEach(function (button) {
      var isActive = button.getAttribute('data-tab') === name;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    tabPanels.forEach(function (panel) {
      var isActive = panel.getAttribute('data-tab-panel') === name;
      panel.classList.toggle('is-active', isActive);
    });
    if (name === 'manager') {
      refreshManager();
    }
  }

  function setPublishModule(name) {
    if (!publishChoice || !publishModules.length) return;
    activePublishModule = name || '';
    if (activePublishModule) {
      publishChoice.setAttribute('hidden', '');
    } else {
      publishChoice.removeAttribute('hidden');
    }
    publishModules.forEach(function (moduleEl) {
      var isActive = moduleEl.getAttribute('data-publish-module') === activePublishModule;
      if (isActive) {
        moduleEl.removeAttribute('hidden');
      } else {
        moduleEl.setAttribute('hidden', '');
      }
    });
  }

  function buildShareLink(zipUrl, fullView) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl);
    if (fullView) {
      base += '&view=full';
    }
    return base;
  }

  function createEmbedId() {
    return 'vwz-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function buildEmbedLink(zipUrl, embedId) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl) + '&embed=1';
    if (embedId) {
      base += '&embedId=' + encodeURIComponent(embedId);
    }
    return base;
  }

  function buildEmbedSnippet(zipUrl) {
    var embedId = createEmbedId();
    var iframeId = 'visor-webzip-' + embedId;
    var src = buildEmbedLink(zipUrl, embedId);
    var origin = window.location.origin;
    return '<iframe id="' + iframeId + '" src="' + src + '" style="width:100%;height:80vh;border:0" loading="lazy" allow="fullscreen"></iframe>\n'
      + '<script>\n'
      + '(function(){\n'
      + '  var iframe=document.getElementById(' + JSON.stringify(iframeId) + ');\n'
      + '  if(!iframe) return;\n'
      + '  window.addEventListener(\"message\", function(event){\n'
      + '    if(event.origin!==' + JSON.stringify(origin) + ') return;\n'
      + '    var data=event.data||{};\n'
      + '    if(data.type!==\"visor-webzip:height\") return;\n'
      + '    if(data.embedId!==' + JSON.stringify(embedId) + ') return;\n'
      + '    var height=Number(data.height)||0;\n'
      + '    if(height>0) iframe.style.height=height+\"px\";\n'
      + '  }, false);\n'
      + '})();\n'
      + '</script>';
  }

  function buildSiteUrl(siteId, indexPath) {
    var base = appBase() + 'site/' + siteId + '/';
    if (indexPath) {
      return base + encodeURI(indexPath);
    }
    return base;
  }

  function closeEmbedModal() {
    if (!embedModal) return;
    embedModal.setAttribute('hidden', '');
  }

  function openEmbedModalForZip(zipUrl) {
    if (!embedModal || !embedCode || !zipUrl) return;
    embedCode.value = buildEmbedSnippet(zipUrl);
    embedModal.removeAttribute('hidden');
    try {
      embedCode.focus();
      embedCode.select();
    } catch (e) {
      // ignore
    }
  }

  function closeManagerSettingsModal() {
    if (!managerSettingsModal) return;
    managerSettingsModal.setAttribute('hidden', '');
  }

  function openManagerSettingsModal() {
    if (!managerSettingsModal) return;
    managerSettingsModal.removeAttribute('hidden');
    try {
      if (cleanupThresholdInput) {
        cleanupThresholdInput.focus();
      }
    } catch (e) {
      // ignore
    }
  }

  function closeMainSettingsModal() {
    if (!mainSettingsModal) return;
    mainSettingsModal.setAttribute('hidden', '');
  }

  function openMainSettingsModal() {
    if (!mainSettingsModal) return;
    mainSettingsModal.removeAttribute('hidden');
  }

  function closeReactPromptModal() {
    if (!reactModal) return;
    reactModal.setAttribute('hidden', '');
  }

  function openReactPromptModal(code) {
    if (!reactModal || !reactPrompt) return;
    var basePrompt = t('reactPrompt.prompt');
    var fullPrompt = basePrompt;
    if (code) {
      fullPrompt += '\n\n' + String(code);
    }
    reactPrompt.value = fullPrompt;
    reactModal.removeAttribute('hidden');
    try {
      reactPrompt.focus();
      reactPrompt.select();
    } catch (e) {
      // ignore
    }
  }

  function setEmbedMode(enabled, embedId) {
    isEmbedMode = !!enabled;
    currentEmbedId = embedId || '';
    if (!isEmbedMode) {
      stopEmbedHeightTracking();
    }
    if (mainContent) {
      if (isEmbedMode) {
        mainContent.setAttribute('hidden', '');
      } else {
        mainContent.removeAttribute('hidden');
      }
    }
    if (embedShell) {
      if (isEmbedMode) {
        embedShell.removeAttribute('hidden');
      } else {
        embedShell.setAttribute('hidden', '');
      }
    }
  }

  function postToParent(message) {
    if (!isEmbedMode) return;
    if (!currentEmbedId) return;
    if (!window.parent || window.parent === window) return;
    try {
      window.parent.postMessage(message, '*');
    } catch (e) {
      // ignore
    }
  }

  function sendEmbedHeight(height) {
    postToParent({
      type: 'visor-webzip:height',
      embedId: currentEmbedId,
      height: height,
      url: window.location.href
    });
  }

  function sendEmbedReady(siteUrl) {
    postToParent({
      type: 'visor-webzip:ready',
      embedId: currentEmbedId,
      siteUrl: siteUrl || '',
      url: window.location.href
    });
  }

  function sendEmbedError(message) {
    postToParent({
      type: 'visor-webzip:error',
      embedId: currentEmbedId,
      message: message || '',
      url: window.location.href
    });
  }

  function stopEmbedHeightTracking() {
    if (embedHeightTimer) {
      clearInterval(embedHeightTimer);
      embedHeightTimer = null;
    }
  }

  function getEmbedContentHeight() {
    if (!embedFrame) return 0;
    try {
      var doc = embedFrame.contentDocument;
      if (!doc) return 0;
      var body = doc.body;
      var html = doc.documentElement;
      var height = Math.max(
        body ? body.scrollHeight : 0,
        html ? html.scrollHeight : 0,
        body ? body.offsetHeight : 0,
        html ? html.offsetHeight : 0
      );
      return height || 0;
    } catch (e) {
      return 0;
    }
  }

  function startEmbedHeightTracking() {
    if (!isEmbedMode) return;
    stopEmbedHeightTracking();
    lastEmbedHeight = 0;
    embedHeightTimer = setInterval(function () {
      var height = getEmbedContentHeight();
      if (!height) return;
      if (Math.abs(height - lastEmbedHeight) < 2) return;
      lastEmbedHeight = height;
      sendEmbedHeight(height);
    }, 450);
  }

  function showEmbedFallback(zipUrl, message) {
    if (embedFallback) {
      embedFallback.removeAttribute('hidden');
    }
    if (embedOpenFallback) {
      embedOpenFallback.href = buildShareLink(zipUrl, true);
    }
    if (message) {
      sendEmbedError(message);
    }
    stopProgress();
    setLoading(false);
  }

  function openEmbedSite(siteUrl) {
    if (!embedFrame) return;
    if (embedFallback) {
      embedFallback.setAttribute('hidden', '');
    }
    setLoading(true);
    embedFrame.onload = function () {
      setLoading(false);
      sendEmbedReady(siteUrl);
      startEmbedHeightTracking();
      setTimeout(function () {
        var height = getEmbedContentHeight();
        if (height) {
          lastEmbedHeight = height;
          sendEmbedHeight(height);
        }
      }, 60);
    };
    embedFrame.src = siteUrl;
  }

  function base64ToBytes(base64) {
    var binary = atob(base64);
    var len = binary.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function formatMiB(bytes) {
    var mib = bytes / (1024 * 1024);
    return mib.toFixed(1).replace('.', ',') + ' MB';
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function formatEta(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '';
    var s = Math.round(seconds);
    var h = Math.floor(s / 3600);
    s -= h * 3600;
    var m = Math.floor(s / 60);
    s -= m * 60;
    if (h > 0) return h + ':' + pad2(m) + ':' + pad2(s);
    return m + ':' + pad2(s);
  }

  function concatUint8Arrays(chunks, totalSize) {
    var size = totalSize;
    if (!size) {
      size = chunks.reduce(function (sum, chunk) { return sum + chunk.length; }, 0);
    }
    var out = new Uint8Array(size);
    var offset = 0;
    for (var i = 0; i < chunks.length; i++) {
      out.set(chunks[i], offset);
      offset += chunks[i].length;
    }
    if (offset !== size) {
      return out.slice(0, offset);
    }
    return out;
  }

  function fetchZipBundleMeta(zipUrl) {
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&meta=1';
    return fetch(endpoint)
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.error) {
          throw new Error(data.error);
        }
        return data || {};
      });
  }

  function fetchZipBundleChunked(zipUrl) {
    var meta = { name: 'site.zip', size: 0, acceptRanges: false };
    var chunkSize = 20 * 1024 * 1024;
    var chunks = [];
    var downloaded = 0;
    var totalSize = 0;
    var downloadStartedAt = Date.now();
    var etaTimer = null;
    var lastEtaText = '';
    var lastChunkAt = Date.now();
    var avgSpeed = 0;
    var etaBaseSeconds = 0;
    var etaBaseAt = 0;
    var lastEtaSeconds = 0;
    var baseProgress = 0;
    var maxProgress = baseProgress;
    var hasStartedDownload = false;
    var dotPhase = 0;
    var dotText = '.';

    function buildDownloadMessage() {
      var message = hasStartedDownload
        ? (formatMiB(downloaded))
        : (t('status.connecting') + dotText);
      var pct = 0;
      if (totalSize) {
        pct = downloaded / totalSize;
        if (pct < 0) pct = 0;
        if (pct > 1) pct = 1;
        message += ' / ' + formatMiB(totalSize) + ' (' + Math.round(pct * 100) + '%)';
      }
      return { message: message, pct: pct };
    }

    function updateEta() {
      if (!totalSize || !avgSpeed) {
        setLoadingEtaVisible(false);
        return;
      }
      var elapsed = (Date.now() - etaBaseAt) / 1000;
      var etaSeconds = etaBaseSeconds - elapsed;
      if (etaSeconds < 0) etaSeconds = 0;
      if (lastEtaSeconds && etaSeconds > lastEtaSeconds) {
        etaSeconds = lastEtaSeconds;
      }
      lastEtaSeconds = etaSeconds;
      var etaText = formatEta(etaSeconds);
      if (etaText) {
        setLoadingEta(t('loading.etaPrefix') + etaText);
        setLoadingEtaVisible(true);
      } else {
        setLoadingEtaVisible(false);
      }
    }

    function updateDownloadProgress() {
      var info = buildDownloadMessage();
      setLoadingMessage(info.message);

      if (!totalSize) return;
      var pct = info.pct;
      var progress = baseProgress + Math.round(pct * 100);
      if (progress > 100) progress = 100;
      if (progress < maxProgress) progress = maxProgress;
      maxProgress = progress;
      setProgress(progress);
    }

    stopProgress();
    startProgress(2);
    setLoadingMessage(t('status.connecting') + '...');
    updateDownloadProgress();
    etaTimer = setInterval(function () {
      dotPhase = (dotPhase + 1) % 3;
      dotText = dotPhase === 0 ? '.' : (dotPhase === 1 ? '..' : '...');
      var info = buildDownloadMessage();
      if (info.message !== lastEtaText) {
        lastEtaText = info.message;
        setLoadingMessage(info.message);
      }
      if (totalSize && downloaded) {
        updateEta();
      }
    }, 1000);

    function fetchPart(part, attempt) {
      var tries = typeof attempt === 'number' ? attempt : 0;
      var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&part=' + part + '&chunkSize=' + chunkSize;
      return fetch(endpoint)
        .then(function (res) {
          if (!res.ok) {
            throw new Error('HTTP ' + res.status);
          }
          return res.json();
        })
        .then(function (data) {
          if (data && data.error) {
            throw new Error(data.error);
          }
          if (data && data.chunkSize && data.chunkSize !== chunkSize) {
            chunkSize = data.chunkSize;
          }
          if (!meta.name && data.name) meta.name = data.name;
          if (!totalSize && data.totalSize) totalSize = data.totalSize;
          if (!meta.acceptRanges && data.acceptRanges) meta.acceptRanges = true;
          if (totalSize && meta.size !== totalSize) meta.size = totalSize;
          var partBytes = base64ToBytes(data.base64 || '');
          if (partBytes.length) {
            if (!hasStartedDownload) {
              hasStartedDownload = true;
              stopProgress();
              setProgress(0);
            }
          }
          chunks.push(partBytes);
          downloaded += partBytes.length;
          var now = Date.now();
          var delta = Math.max(0.2, (now - lastChunkAt) / 1000);
          var chunkSpeed = partBytes.length / delta;
          avgSpeed = avgSpeed ? (avgSpeed * 0.8 + chunkSpeed * 0.2) : chunkSpeed;
          lastChunkAt = now;
          if (totalSize) {
            etaBaseSeconds = (totalSize - downloaded) / avgSpeed;
            etaBaseAt = now;
            if (!lastEtaSeconds) lastEtaSeconds = etaBaseSeconds;
          }
          updateDownloadProgress();
          if (totalSize && downloaded >= totalSize) {
            return;
          }
          if (!totalSize && partBytes.length < chunkSize) {
            return;
          }
          return fetchPart(part + 1, 0);
        })
        .catch(function (err) {
          if (tries >= 2) {
            throw err;
          }
          setLoadingMessage('Reintentando trozo ' + (part + 1) + ' (' + (tries + 1) + '/2)...');
          return new Promise(function (resolve) { setTimeout(resolve, 700 * (tries + 1)); })
            .then(function () { return fetchPart(part, tries + 1); });
        });
    }

    return fetchPart(0, 0).then(function () {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      var zipBytes = concatUint8Arrays(chunks, totalSize || downloaded);
      return {
        name: meta.name || 'site.zip',
        size: totalSize || zipBytes.length,
        bytes: zipBytes
      };
    }).catch(function (err) {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      throw err;
    });
  }

  function fetchZipBundle(zipUrl) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error(t('error.configMissing')));
    }
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1';
    return fetch(endpoint)
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.error) {
          throw new Error(data.error);
        }
        return data;
      })
      .catch(function () {
        return fetchZipBundleChunked(zipUrl);
      });
  }

  function findIndexPath(paths) {
    var lower = paths.map(function (path) { return path.toLowerCase(); });
    var idx = lower.findIndex(function (p) {
      return p === 'index.html' || p.endsWith('/index.html');
    });
    if (idx !== -1) return paths[idx];
    idx = lower.findIndex(function (p) {
      return p === 'index.htm' || p.endsWith('/index.htm');
    });
    if (idx !== -1) return paths[idx];
    var htmlIndex = lower.findIndex(function (p) { return p.endsWith('.html') || p.endsWith('.htm'); });
    if (htmlIndex !== -1) return paths[htmlIndex];
    return paths[0] || '';
  }

  function pickIndexPath(paths) {
    var htmlPaths = paths.filter(function (path) {
      var lower = path.toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (!htmlPaths.length) {
      return Promise.reject(new Error(t('error.needHtmlFile')));
    }
    var preferred = findIndexPath(paths);
    if (preferred && /index\.html?$/.test(preferred.toLowerCase())) {
      return Promise.resolve(preferred);
    }
    if (htmlPaths.length === 1) {
      return Promise.resolve(htmlPaths[0]);
    }
    return openHtmlPicker(htmlPaths, preferred || htmlPaths[0]);
  }

  function loadZip(zipUrl, options) {
    var opts = options || {};
    var autoOpen = !!opts.autoOpen;
    var showProgress = opts.showProgress !== false;
    var normalizedZipUrl = normalizeZipUrl(zipUrl);
    var shouldUseNormalized = false;
    if (normalizedZipUrl.indexOf('/s/') !== -1 || normalizedZipUrl.indexOf('nextcloud') !== -1) {
      shouldUseNormalized = true;
    }
    if (zipUrl.indexOf('dropbox.com') !== -1) {
      shouldUseNormalized = true;
    }
    var effectiveZipUrl = shouldUseNormalized ? normalizedZipUrl : zipUrl;
    if (shouldUseNormalized && input && input.value && input.value.trim() === zipUrl && normalizedZipUrl !== zipUrl) {
      input.value = normalizedZipUrl;
    }
    if (autoOpen) {
      setLoading(true);
      setProgress(5);
      setLoadingMessage(t('status.preparing'));
    }
    if (!GAS_WEBAPP_URL) {
      setStatus(t('error.configMissing'));
      if (showProgress && !autoOpen) {
        setLoading(false);
      }
      return Promise.resolve();
    }
    setStatus(t('status.preparingZip'));
    if (autoOpen) {
      startProgress(8);
    }

    var workerPromise = registerServiceWorker().catch(function () {
      throw new Error(t('error.offlineNotAllowed'));
    });
    var controlPromise = workerPromise.then(function () {
      return waitForServiceWorkerControl();
    });

    return computeSiteId(effectiveZipUrl)
      .then(function (siteId) {
        return getSite(siteId).then(function (site) {
          return { siteId: siteId, cached: !!site, site: site };
        });
      })
      .then(function (result) {
        currentZipUrl = effectiveZipUrl;
        var shareLink = buildShareLink(effectiveZipUrl, true);
        setShareLink(shareLink);

        if (result.cached && !opts.force) {
          if (result.site && isRestrictionActive(result.site.restrictions) && !isRestrictionAllowedNow(result.site.restrictions)) {
            if (isRestrictionExpired(result.site.restrictions)) {
              return deleteSite(result.siteId).then(function () {
                showRestrictionModal(result.site.restrictions);
                var err = new Error(t('error.restricted'));
                err.skipStatus = true;
                throw err;
              });
            }
            if (opts.allowInactive) {
              setStatus(t('status.restrictedReady'));
              if (showProgress && !autoOpen) {
                setLoading(false);
              }
              currentRestrictions = null;
              applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            showRestrictionModal(result.site.restrictions);
            var errInactive = new Error(t('error.restricted'));
            errInactive.skipStatus = true;
            throw errInactive;
          }
          if (opts.embed && result.site && isRestrictionActive(result.site.restrictions) && !restrictionsAllowEmbed(result.site.restrictions)) {
            throw new Error(t('error.embedNotAllowed'));
          }
          var siteUrl = buildSiteUrl(result.siteId, result.site.indexPath);
          return controlPromise.then(function () {
            if (opts.embed) {
              openEmbedSite(siteUrl);
              return { siteId: result.siteId, siteUrl: siteUrl };
            }
            if (autoOpen) {
              setProgress(100);
              window.location.assign(siteUrl);
            }
            if (showProgress && !autoOpen) {
              setLoading(false);
            }
            currentRestrictions = result.site ? result.site.restrictions || null : null;
            applyRestrictionsToActions(currentRestrictions);
            return { siteId: result.siteId, siteUrl: siteUrl };
          });
        }

        setStatus(t('status.downloadingZip'));
        if (showProgress && !autoOpen) {
          setLoading(true);
          setLoadingMessage(t('status.connecting') + '...');
          startProgress(2);
          setLoadingEtaVisible(false);
        }
        if (autoOpen) {
          stopProgress();
          startProgress(2);
          setLoadingEtaVisible(false);
        }
        return fetchZipBundle(effectiveZipUrl).then(function (bundle) {
          if (autoOpen || showProgress) {
            stopProgress();
            setProgress(100);
            setLoadingEtaVisible(false);
          }
          setStatus(t('status.unpacking'));
          if (autoOpen || showProgress) {
            stopProgress();
            setProgress(0);
            setLoadingMessage(t('status.unpacking'));
            setLoadingEtaVisible(false);
          }
          if (!window.fflate || !window.fflate.unzipSync) {
            throw new Error(t('error.fflateMissing'));
          }
          var bytes = bundle.bytes ? bundle.bytes : base64ToBytes(bundle.base64);
          var entries = window.fflate.unzipSync(bytes);
          var restrictions = extractRestrictions(entries);
          var blockedNow = isRestrictionActive(restrictions) && !isRestrictionAllowedNow(restrictions);
          if (blockedNow && isRestrictionExpired(restrictions)) {
            showRestrictionModal(restrictions);
            var blocked = new Error(t('error.restricted'));
            blocked.skipStatus = true;
            throw blocked;
          }
          if (opts.embed && isRestrictionActive(restrictions) && !restrictionsAllowEmbed(restrictions)) {
            throw new Error(t('error.embedNotAllowed'));
          }
          var files = [];
          Object.keys(entries).forEach(function (entryPath) {
            if (entryPath.endsWith('/') || entryPath.indexOf('__MACOSX/') === 0) {
              return;
            }
            if (entryPath === 'restrictions.json') {
              return;
            }
            var normalized = normalizePath(entryPath);
            var data = entries[entryPath];
            var type = guessMimeType(normalized);
            var blob = new Blob([data], { type: type });
            files.push({
              key: result.siteId + '::' + normalized,
              siteId: result.siteId,
              path: normalized,
              blob: blob,
              size: blob.size,
              type: type
            });
          });

          if (!files.length) {
            throw new Error(t('error.zipNoWebFiles'));
          }
          if (autoOpen || showProgress) {
            stopProgress();
            setProgress(100);
          }

          var paths = files.map(function (file) { return file.path; });
          return pickIndexPath(paths).then(function (indexPath) {
            if (htmlPickerWasLoading) {
              htmlPickerWasLoading = false;
              setLoading(true);
              setLoadingMessage(t('status.saving'));
            }
            setStatus(t('status.saving'));
            if (autoOpen || showProgress) {
              stopProgress();
              setProgress(0);
              startProgress(0);
              setLoadingMessage(t('status.saving'));
              setLoadingEtaVisible(false);
            }

            var totalBytes = files.reduce(function (sum, item) { return sum + item.size; }, 0);
            return ensureStorageCapacity(totalBytes).then(function (canProceed) {
              if (!canProceed) {
                throw new Error(t('error.noSpace'));
              }
              return deleteSite(result.siteId).catch(function () {
                // Ignore delete errors.
              });
            }).then(function () {
              return extractTitleFromFiles(files, indexPath).then(function (foundTitle) {
                var siteTitle = foundTitle || deriveTitleFromPath(indexPath) || deriveTitleFromUrl(effectiveZipUrl);
                var site = {
                  id: result.siteId,
                  url: effectiveZipUrl,
                  indexPath: indexPath,
                  updatedAt: Date.now(),
                  fileCount: files.length,
                  totalBytes: totalBytes,
                  title: siteTitle,
                  restrictions: restrictions || null
                };
                return saveSite(site).then(function () {
                  return saveFiles(files).then(function () {
                    var siteUrl = buildSiteUrl(result.siteId, indexPath);
                    return controlPromise.then(function () {
                      currentRestrictions = restrictions || null;
                      applyRestrictionsToActions(currentRestrictions);
                      if (opts.embed) {
                        openEmbedSite(siteUrl);
                        return { siteId: result.siteId, siteUrl: siteUrl };
                      }
                      if (blockedNow && !opts.allowInactive) {
                        showRestrictionModal(restrictions);
                        if (showProgress || autoOpen) {
                          stopProgress();
                          setLoading(false);
                        }
                        if (loadingMessage) {
                          loadingMessage.textContent = t('loading.message');
                        }
                        if (loadingEta) {
                          setLoadingEtaVisible(false);
                        }
                        return { siteId: result.siteId, siteUrl: null };
                      }
                      if (autoOpen) {
                        window.location.assign(siteUrl);
                      }
                      if (showProgress && !autoOpen) {
                        setProgress(100);
                        stopProgress();
                        setLoading(false);
                      }
                      refreshManager();
                      return { siteId: result.siteId, siteUrl: siteUrl };
                    });
                  });
                });
              });
            });
          });
        });
      })
      .then(function () {
        setStatus(currentShareLink);
      })
      .catch(function (err) {
        var message = formatUserError(err);
        if (opts.embed) {
          setShareLink('');
          showEmbedFallback(effectiveZipUrl, message);
          return;
        }
        setShareLink('');
        currentRestrictions = null;
        applyRestrictionsToActions(currentRestrictions);
        if (!err || !err.skipStatus) {
          setStatus(message);
        }
        if (autoOpen) {
          setLoading(false);
        }
        if (showProgress && !autoOpen) {
          stopProgress();
          setLoading(false);
        }
      });
  }

  function copyText(value, sourceButton) {
    if (!value) return;
    var done = function () {
      if (sourceButton) {
        showInlineToast(sourceButton, t('status.copySuccess'));
      } else {
        flashMessage(t('status.copySuccess'));
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, done);
      return;
    }
    var textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      done();
    } finally {
      document.body.removeChild(textarea);
    }
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      copyText(currentShareLink);
    });
  }

  if (embedButton) {
    embedButton.addEventListener('click', function () {
      if (!currentZipUrl) {
        return;
      }
      openEmbedModalForZip(currentZipUrl);
    });
  }

  if (embedModal) {
    if (embedCloseButtons && embedCloseButtons.length) {
      embedCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeEmbedModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeEmbedModal();
      }
    });
  }

  if (embedCopyButton) {
    embedCopyButton.addEventListener('click', function () {
      if (!embedCode || !embedCode.value) {
        return;
      }
      copyText(embedCode.value, embedCopyButton);
    });
  }

  if (dropzone) {
    var stopEvent = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    dropzone.addEventListener('dragenter', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragover', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragleave', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
    });
    dropzone.addEventListener('drop', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
      collectFilesFromDrop(event);
    });
  }

  if (folderInput) {
    folderInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (folderButton && folderInput) {
    folderButton.addEventListener('click', function () {
      folderInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (fileButton && fileInput) {
    fileButton.addEventListener('click', function () {
      fileInput.click();
    });
  }

  if (buildZipButton) {
    buildZipButton.addEventListener('click', function () {
      buildZipFromSelection();
    });
  }

  if (zipNameInput) {
    zipNameInput.addEventListener('input', function () {
      zipNameDirty = true;
    });
  }

  if (htmlZipInput) {
    htmlZipInput.addEventListener('input', function () {
      if (htmlZipInput.value.trim()) {
        setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        setHtmlZipStatus(t('zipper.html.status.empty'));
      }
    });
  }

  if (htmlZipBuildButton) {
    htmlZipBuildButton.addEventListener('click', function () {
      buildZipFromHtml();
    });
  }
  if (restrictionToggle) {
    restrictionToggle.addEventListener('change', function () {
      if (restrictionToggle.checked) {
        var now = new Date();
        if (restrictionStartInput) {
          restrictionStartInput.value = formatLocalDateTime(now);
        }
        if (restrictionNoEnd && restrictionNoEnd.checked && restrictionEndInput) {
          restrictionEndInput.value = '';
        }
      }
      applyRestrictionUiState();
      updateRestrictionDefaults();
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.ready');
      }
      if (!restrictionToggle.checked) {
        restrictionZipFile = null;
        if (restrictionZipApply) {
          restrictionZipApply.disabled = true;
        }
      }
    });
  }
  if (restrictionNoEnd) {
    restrictionNoEnd.addEventListener('change', function () {
      applyRestrictionUiState();
    });
  }
  if (restrictionZipPick && restrictionZipInput) {
    restrictionZipPick.addEventListener('click', function () {
      restrictionZipInput.click();
    });
  }
  if (restrictionZipInput) {
    restrictionZipInput.addEventListener('change', function () {
      restrictionZipFile = restrictionZipInput.files && restrictionZipInput.files[0] ? restrictionZipInput.files[0] : null;
      if (restrictionZipApply) {
        restrictionZipApply.disabled = !restrictionZipFile;
      }
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = restrictionZipFile ? restrictionZipFile.name : t('zipper.restrict.status.ready');
      }
    });
  }
  if (restrictionZipApply) {
    restrictionZipApply.addEventListener('click', function () {
      applyRestrictionsToZipFile(restrictionZipFile);
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var zipUrl = input.value.trim();
      if (!zipUrl) {
        return;
      }
      ignoreRestrictionsForShare = true;
      loadZip(zipUrl, { force: true, allowInactive: true })
        .finally(function () {
          ignoreRestrictionsForShare = false;
        });
    });
  }

  var params = new URLSearchParams(window.location.search);
  var urlParam = params.get('url');
  if (urlParam) {
    ignoreRestrictionsForShare = false;
  }
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      setLanguage(langSelect.value);
    });
  }
  setLanguage(getInitialLang());
  updateServiceInfo();
  var goTabButtons = document.querySelectorAll('[data-go-tab]');
  if (goTabButtons.length) {
    goTabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-tab');
        if (target) {
          if (target === 'main' || target === 'zipper') {
            setActiveTab('publish');
            setPublishModule(target);
          } else {
            setActiveTab(target);
          }
        }
      });
    });
  }
  if (publishStartButtons.length) {
    publishStartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-publish-start');
        setActiveTab('publish');
        setPublishModule(target);
      });
    });
  }
  if (publishBackButtons.length) {
    publishBackButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setActiveTab('publish');
        setPublishModule('');
      });
    });
  }
  var goPublishButtons = document.querySelectorAll('[data-go-publish]');
  if (goPublishButtons.length) {
    goPublishButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-publish');
        setActiveTab('publish');
        setPublishModule(target);
      });
    });
  }
  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setActiveTab(button.getAttribute('data-tab'));
      });
    });
    setActiveTab('publish');
  }
  if (managerList) {
    managerList.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      var button = target.closest('button');
      if (!button) return;
      if (button.disabled) return;
      var action = button.getAttribute('data-action');
      var siteId = button.getAttribute('data-site-id');
      var indexPath = button.getAttribute('data-index-path') || '';
      var zipUrl = button.getAttribute('data-zip-url') || '';
      if (action === 'delete' && siteId) {
        button.classList.add('is-active');
        deleteSite(siteId).then(function () {
          refreshManager();
        }).finally(function () {
          button.classList.remove('is-active');
        });
        return;
      }
      if (action === 'view' && siteId) {
        getSite(siteId).then(function (site) {
          if (site && isRestrictionActive(site.restrictions) && !isRestrictionAllowedNow(site.restrictions)) {
            if (isRestrictionExpired(site.restrictions)) {
              return deleteSite(siteId).then(function () {
                refreshManager();
                showRestrictionModal(site.restrictions);
              });
            }
            showRestrictionModal(site.restrictions);
            return;
          }
          var siteUrl = buildSiteUrl(siteId, indexPath || '');
          window.open(siteUrl, '_blank');
        });
        return;
      }
      if (action === 'share' && zipUrl) {
        copyText(buildShareLink(zipUrl, true), button);
        return;
      }
      if (action === 'embed' && zipUrl) {
        copyText(buildEmbedSnippet(zipUrl), button);
        return;
      }
      if (action === 'download' && zipUrl) {
        var downloadUrl = normalizeZipUrl(zipUrl);
        window.open(downloadUrl, '_blank');
        return;
      }
      if (action === 'edit' && siteId) {
        var item = button.closest('.manager-item');
        if (!item) return;
        var titleEl = item.querySelector('[data-title]');
        startTitleEdit(siteId, titleEl);
      }
    });
  }
  var sortDirButton = document.querySelector('[data-manager-sort-dir]');
  if (managerSortSelect) {
    setManagerSort(getManagerSort());
    managerSortSelect.addEventListener('change', function () {
      setManagerSort(managerSortSelect.value);
      refreshManager();
    });
  }
  if (sortDirButton) {
    setManagerSortDir(getManagerSortDir());
    sortDirButton.addEventListener('click', function () {
      var nextDir = getManagerSortDir() === 'asc' ? 'desc' : 'asc';
      setManagerSortDir(nextDir);
      refreshManager();
    });
  }
  if (cleanupThresholdInput) {
    cleanupThresholdInput.addEventListener('input', function () {
      setCleanupThreshold(cleanupThresholdInput.value);
    });
  }
  if (cleanupDaysInput) {
    cleanupDaysInput.addEventListener('change', function () {
      setCleanupDays(cleanupDaysInput.value);
      cleanupOldSites();
      refreshManager();
    });
  }
  if (resetCleanupButton) {
    resetCleanupButton.addEventListener('click', function () {
      setCleanupThreshold(CLEANUP_THRESHOLD_DEFAULT);
      setCleanupDays(CLEANUP_DAYS_DEFAULT);
      cleanupOldSites();
      refreshManager();
    });
  }
  if (deleteAllButton) {
    deleteAllButton.addEventListener('click', function () {
      if (!confirm(t('manager.deleteAllConfirm'))) {
        return;
      }
      getAllSites().then(function (sites) {
        var ids = sites.map(function (site) { return site.id; });
        return deleteSitesSequential(ids);
      }).then(function () {
        refreshManager();
      });
    });
  }
  if (managerSettingsOpenButton && managerSettingsModal) {
    managerSettingsOpenButton.addEventListener('click', function () {
      openManagerSettingsModal();
    });
    if (managerSettingsCloseButtons && managerSettingsCloseButtons.length) {
      managerSettingsCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeManagerSettingsModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeManagerSettingsModal();
      }
    });
  }

  if (restrictCloseButtons && restrictCloseButtons.length) {
    restrictCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (restrictModal) {
          restrictModal.setAttribute('hidden', '');
        }
      });
    });
  }

  if (mainSettingsOpenButtons && mainSettingsOpenButtons.length && mainSettingsModal) {
    mainSettingsOpenButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        openMainSettingsModal();
      });
    });
    if (mainSettingsCloseButtons && mainSettingsCloseButtons.length) {
      mainSettingsCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeMainSettingsModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainSettingsModal && !mainSettingsModal.hasAttribute('hidden')) {
        closeMainSettingsModal();
      }
    });
  }
  var lockIndicators = document.querySelectorAll('[data-lock-indicator]');
  if (lockIndicators && lockIndicators.length && mainSettingsModal) {
    lockIndicators.forEach(function (node) {
      node.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        openMainSettingsModal();
      });
      node.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openMainSettingsModal();
        }
      });
    });
  }
  if (languageOpenButton && languagePanel) {
    languageOpenButton.addEventListener('click', function (event) {
      event.preventDefault();
      if (languagePanel.hasAttribute('hidden')) {
        languagePanel.removeAttribute('hidden');
      } else {
        languagePanel.setAttribute('hidden', '');
      }
      if (langSelect) {
        try {
          langSelect.focus();
          langSelect.click();
          setTimeout(function () {
            try {
              langSelect.click();
            } catch (e) {
              // ignore
            }
          }, 0);
        } catch (e) {
          // ignore
        }
      }
    });
    document.addEventListener('click', function (event) {
      if (languagePanel.hasAttribute('hidden')) return;
      if (!languagePanel.contains(event.target) && !languageOpenButton.contains(event.target)) {
        languagePanel.setAttribute('hidden', '');
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !languagePanel.hasAttribute('hidden')) {
        languagePanel.setAttribute('hidden', '');
      }
    });
  }
  if (aboutOpen && aboutModal) {
    aboutOpen.addEventListener('click', function () {
      aboutModal.removeAttribute('hidden');
    });
    aboutCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        aboutModal.setAttribute('hidden', '');
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        aboutModal.setAttribute('hidden', '');
      }
    });
  }
  if (htmlModal) {
    htmlCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        closeHtmlPicker();
      });
    });
    if (htmlConfirm) {
      htmlConfirm.addEventListener('click', function () {
        confirmHtmlPicker();
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeHtmlPicker();
      }
    });
  }
  if (reactModal) {
    if (reactCloseButtons && reactCloseButtons.length) {
      reactCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeReactPromptModal();
        });
      });
    }
    if (reactCopyButton) {
      reactCopyButton.addEventListener('click', function () {
        if (!reactPrompt || !reactPrompt.value) {
          return;
        }
        copyText(reactPrompt.value, reactCopyButton);
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeReactPromptModal();
      }
    });
  }
  cleanupOldSites();
  refreshManager();
  if (urlParam) {
    if (input) {
      input.value = urlParam;
    }
    var viewParam = (params.get('view') || '').toLowerCase();
    var embedParam = (params.get('embed') || '').toLowerCase();
    var embedActive = embedParam === '1' || embedParam === 'true' || embedParam === 'yes';
    var autoOpen = viewParam === 'full' || viewParam === '1';
    if (embedActive) {
      var embedIdParam = params.get('embedId') || '';
      setEmbedMode(true, embedIdParam);
      loadZip(urlParam, { force: false, autoOpen: false, embed: true, embedId: embedIdParam });
    } else {
      setEmbedMode(false, '');
      setActiveTab('publish');
      setPublishModule('main');
      loadZip(urlParam, { force: false, autoOpen: autoOpen });
    }
  } else {
    setEmbedMode(false, '');
    setPublishModule('');
    setLoading(false);
  }
})();
