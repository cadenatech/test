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
        theme: 'Tema',
        themeHint: 'Cambiar tema',
        themeAuto: 'Automático',
        themeLight: 'Claro',
        themeDark: 'Oscuro',
        subtitle: 'Autopublicación de recursos educativos en web (HTML) o en PDF y/o DOCX desde tu almacenamiento en la nube.'
      },
      settings: {
        title: 'Ajustes de visibilidad',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por fechas',
        restrictHint: 'Aquí puedes definir cuándo estará visible el recurso y qué acciones estarán disponibles en el gestor de recursos.',
        restrictToggle: 'Limitar el acceso',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        neverExpires: 'Acceso con fecha de fin',
        enforceEndDuringView: 'Desactivar la visualización al llegar a la fecha de fin, incluso si está abierto',
        warningMinutesLabel: 'Avisar antes en minutos (0 para no avisar)',
        warningMessageLabel: 'Mensaje de aviso',
        warningMessagePlaceholder: 'El tiempo de acceso se agota en {minutes} minutos.',
        warningMessageDefault: 'El tiempo de acceso se agota en {minutes} minutos.',
        periodHint: 'El recurso solo será visible dentro de este intervalo.',
        periodHintLiveEndOn: 'La visualización se desactivará al llegar a la fecha de fin.',
        periodHintLiveEndOff: 'La visualización no se desactivará automáticamente al llegar a la fecha de fin.',
        periodHintWarningOn: 'Habrá aviso {minutes} minutos antes.',
        periodHintWarningOff: 'No habrá aviso previo.',
        summaryLiveEndOn: 'Desactiva al llegar al fin',
        summaryLiveEndOff: 'Sin desactivación automática',
        summaryWarningOn: 'Aviso: {minutes} min antes',
        summaryWarningOff: 'Sin aviso previo',
        summaryNoRestrictions: 'Recurso sin restricciones de visibilidad.',
        summaryAllowedActions: 'Acciones del gestor de recursos: {actions}',
        summaryNoActions: 'ninguna',
        summaryBlockedActions: 'No se podrá: {actions}',
        summaryNoBlockedActions: 'ninguna',
        actionsTitle: 'Acciones disponibles mientras el recurso sea accesible',
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
        choice: {
          zipper: {
            title: 'Crea un ZIP con tus recursos educativos',
            note: 'Crea un ZIP desde archivos web, PDF, DOCX y otros tipos, o desde código HTML.',
            restrictHint: 'Se crearán tres tipos de visor según el contenido: 1) visor de páginas web (como recursos generados con IA o proyectos de eXeLearning), 2) visor de documentos (PDF y DOCX) y 3) visor de carpetas (para visualizar cualquier tipo de archivos).'
          },
          main: {
            title: 'Ya tengo un ZIP en la nube con enlace',
            note: 'Pega el enlace público (ZIP/ELPX) y crea el enlace del visor.',
            secondaryHtml: 'Si usas .elpx de eXeLearning, también puedes abrirlo aquí <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="¿Qué es ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Un archivo .elpx es un proyecto de eXeLearning que internamente utiliza el formato ZIP, lo que permite que el visor acceda a su contenido y lo muestre correctamente.</span></span>',
            elpxTooltip: '¿Qué es ELPX?',
            elpxTooltipHtml: 'Un archivo .elpx es un proyecto de eXeLearning que internamente utiliza el formato ZIP, lo que permite que el visor acceda a su contenido y lo muestre correctamente.'
          }
        }
      },
      tabs: {
        label: 'Secciones'
      },
      main: {
        subtitle: 'Si ya tienes tu recurso en formato ZIP o .elpx en un servicio con <strong>enlace público</strong> (Drive, Dropbox, etc.), pega aquí el enlace para generar el enlace.',
        form: {
          title: 'Ya tengo un ZIP en la nube con enlace',
          step: 'Pega el enlace público al ZIP (o .elpx) y pulsa “Crear enlace”.',
          placeholder: 'Pega aquí el enlace público del ZIP o del .elpx (también válido si incluye PDF o DOCX)',
          submit: 'Crear enlace'
        },
        output: {
          title: 'Enlace para compartir',
          step: '',
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
        checkUpdates: 'Comprobar actualizaciones',
        checkUpdatesHelp: 'Verifica si los ZIP han cambiado en la nube.',
        checkUpdatesModalTitle: 'Comprobar actualizaciones',
        checkingUpdates: 'Comprobando actualizaciones...',
        checkUpdatesNote: 'Puedes cerrar esta ventana. La comprobación seguirá en segundo plano.',
        checkUpdatesProgress: '{done} de {total}',
        checkUpdatesDoneSummary: 'Actualizaciones: {changed} de {total}.',
        checkUpdatesNone: 'No hay recursos guardados.',
        checkUpdatesDone: 'Comprobación finalizada.',
        checkUpdatesUnavailable: 'No se puede comprobar sin el backend configurado.',
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
          download: 'Descargar archivo',
          update: 'Actualizar',
          updating: 'Actualizando...',
          updated: 'Actualizado'
        },
        editPrompt: 'Título del recurso',
        empty: 'No hay recursos guardados en este navegador.',
        siteNoUrl: 'Sitio sin URL',
        noDate: 'sin fecha'
      },
      badges: {
        scheduled: 'Programado',
        opening: 'Inicio: {date}',
        closing: 'Fin: {date}',
        updateAvailable: 'Actualización disponible',
        updatedAt: 'Actualizado: {date}'
      },
      updates: {
        title: 'Nueva versión disponible',
        body: 'El recurso ha cambiado en la nube. Puedes actualizarlo ahora.',
        action: 'Actualizar',
        dismiss: 'Ahora no'
      },
      zipper: {
        title: 'Crear ZIP para el visor',
        restrict: {
          summaryTitle: 'Acceso limitado por fechas'
        },
        accordion: {
          filesTitle: '¿Tu recurso tiene uno o más archivos? Crea aquí un ZIP'
        },
        subtitle: {
          item1: 'Para publicar tu recurso, guarda todos los archivos en una carpeta y comprímela en un archivo <strong>.zip</strong>. Puede contener páginas web y/o uno o varios <strong>PDF</strong>.',
          item2: 'Si el recurso está hecho con <strong>eXeLearning 3 o superior</strong>, puedes usar directamente el archivo <strong>.elpx</strong>.',
          item3: 'Si usas <strong>eXeLearning 2.x</strong>, exporta el proyecto a <strong>ZIP</strong> desde el programa y continúa con la opción “Ya tengo un ZIP”.'
        },
        exe: {
          tooltip: 'eXeLearning: en la versión 3+ puedes usar directamente un .elpx (ya es un ZIP). Versión 2.x: Archivo > Exportar > Sitio Web > Archivo comprimido ZIP.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Versión 3+: puedes usar directamente el archivo <code>.elpx</code> (ya es un ZIP).<br>• Versión 2.x: Archivo &gt; Exportar &gt; Sitio Web &gt; Archivo comprimido ZIP.'
        },
        step1: {
          title: 'Añade tus archivos',
          note: 'Arrastra la carpeta o selecciona los archivos desde el botón.'
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
          previewSelectFirst: 'Para previsualizar, selecciona archivos o pega HTML.',
          previewPreparing: 'Preparando previsualización local...',
          previewOpened: 'Previsualización abierta en una pestaña nueva.',
          previewFailed: 'No se pudo abrir la previsualización.',
          engineMissing: 'No se pudo cargar el motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado.',
          failed: 'No se pudo crear el ZIP. Revisa los archivos.',
          created: {
            html: 'ZIP creado: visor web HTML listo.',
            documents: 'ZIP creado: visor de documentos listo.',
            files: 'ZIP creado: visor de archivos listo.'
          }
        },
        step2: {
          title: 'Descarga el ZIP',
          detail: 'Al crear el ZIP se descargará un archivo que puedes subir a Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Forzar visor de carpetas',
          forceFolderNote: 'El recurso se abirá en modo explorador de archivos con el contenido como archivos organizados en carpetas',
          forceFolderTooltip: 'Más información',
          forceFolderTooltipHtml: 'Si activas esta opción, el ZIP se abrirá en modo explorador de archivos: verás el contenido como archivos organizados en carpetas, incluso cuando incluya HTML o documentos.<br><br>Si no lo marcas, el programa detectará automáticamente el tipo de visor que utilizará.<br><br>Si no estás seguro, no lo marques.'
        },
        zipName: {
          label: 'Nombre del ZIP',
          placeholder: 'mi_recurso',
          default: 'mi_recurso'
        },
        resourceTitle: {
          label: 'Título del recurso',
          placeholder: 'Mi recurso',
          toggleLabel: 'Poner un título al recurso (título actual: {title})',
          currentEmpty: 'sin título'
        },
        build: 'Crear y descargar ZIP',
        html: {
          title: '¿No tienes archivos pero tienes el código HTML? Pégalo aquí',
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
          title: '¿Tienes un ZIP o ELPX ya creado y quieres añadirle restricciones de visibilidad? Súbelo aquí',
          note: 'Sube tu ZIP y el visor añadirá las restricciones. Después tendrás que subirlo a Drive, Dropbox, etc.',
          lockedText: 'Para usar esta opción, configura la disponibilidad el recurso en “Opciones” (debajo de este bloque).',
          lockedAction: 'Activar limitación',
          lockedStatus: '',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restricciones y descargar',
          status: {
            ready: '',
            working: 'Aplicando restricciones...',
            done: 'ZIP listo con restricciones.',
            failed: 'No se pudo modificar el ZIP. Revisa el archivo.'
          }
        },
        help: {
          inline: 'Si ya has creado un archivo ZIP y lo has compartido en un servicio con enlace público, pasa a la sección: “Ya tengo un ZIP en la nube con enlace”.',
          previewTitle: 'Previsualiza el recurso antes de descargarlo (opcional)',
          nextStepText: 'El siguiente paso es subir y compartir con enlace público el archivo ZIP o ELPX. Cuando lo tengas pulsa sobre Continuar.',
          previewAction: 'Previsualizar',
          previewApplyRestrictions: 'Aplicar restricciones en la previsualización',
          previewApplyRestrictionsNote: 'Actívalo para comprobar cómo se abre y se cierra el recurso según las fechas configuradas.',
          previewApplyRestrictionsInfo: 'Más información',
          previewApplyRestrictionsInfoHtml: 'Úsalo para comprobar cómo se abre y se cierra el recurso según las fechas configuradas.',
          goTab: 'Siguiente: “Ya tengo un ZIP en la nube con enlace”'
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
          item4: 'Carpetas con un HTML principal (normalmente <code>index.html</code>).',
          item5: 'ZIPs con uno o varios <strong>PDF</strong> (aunque no tengan archivos HTML).'
        },
        cant: {
          title: 'Qué no funciona o puede fallar',
          item1: 'Webs que necesitan servidor (formularios que guardan datos, bases de datos, PHP o similar).',
          item2: 'Enlaces externos que requieren iniciar sesión o permisos especiales.',
          item3: 'ZIPs vacíos o sin HTML, PDF ni DOCX.'
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
        body: '<nav class="about-index" data-help-nav aria-label="Índice de ayuda"><p class="about-index__title">Índice</p><ul><li><a href="#help-objetivo">Objetivo</a></li><li><a href="#help-pasos">Cómo compartir en 3 pasos</a></li><li><a href="#help-opciones">Opciones para empezar</a></li><li><a href="#help-visor">Qué visor se crea</a></li><li><a href="#help-previo">Antes de compartir</a></li><li><a href="#help-limitacion">Limitación de visualización</a></li><li><a href="#help-gestor">Gestor de recursos</a></li><li><a href="#help-faq">FAQ: privacidad y datos</a></li></ul></nav><section aria-labelledby="help-objetivo"><h3 class="about-section-title" id="help-objetivo" tabindex="-1">Objetivo</h3><p>Comparte tus materiales con tu alumnado mediante un enlace, de forma sencilla y rápida.</p></section><section aria-labelledby="help-pasos"><h3 class="about-section-title" id="help-pasos" tabindex="-1">Cómo compartir en 3 pasos</h3><ol class="about-steps"><li>Prepara tu recurso en un archivo ZIP (si no lo tienes, el programa lo hará por ti).</li><li>Sube ese ZIP a tu nube (Drive, Dropbox, Nextcloud, etc.) y consigue enlace público.</li><li>Pega el enlace en el visor y pulsa <strong>Crear enlace</strong>.</li></ol><p>Listo: el programa te dará el enlace final, que es el que compartes con el alumnado.</p></section><section aria-labelledby="help-opciones"><h3 class="about-section-title" id="help-opciones" tabindex="-1">Opciones para empezar</h3><p><strong>A) Crear ZIP desde archivos</strong>. Si ya tienes el ZIP creado, pasa a la opción C.</p><ul><li>Si tienes los archivos en tu ordenador, usa esta opción.</li><li>Añade carpeta o archivos y pulsa <strong>Crear y descargar ZIP</strong>.</li><li>Después sube ese ZIP a tu nube y compártelo como en la opción C.</li></ul><p><strong>B) Pegar HTML</strong></p><ul><li>Si no tienes ZIP pero sí código HTML, pégalo y crea el ZIP automáticamente.</li></ul><p><strong>C) Ya tengo un ZIP/ELPX en la nube con enlace público</strong></p><ul><li>Pega el enlace público del ZIP o ELPX y crea el enlace del visor.</li></ul></section><section aria-labelledby="help-visor"><h3 class="about-section-title" id="help-visor" tabindex="-1">Qué visor se crea</h3><p>Según el contenido, el sistema abre automáticamente:</p><ul><li><strong>Visor web</strong> (páginas HTML): verás tu recurso como página web.</li><li><strong>Visor de documentos</strong> (PDF y DOCX): verás tus recursos como documentos.</li><li><strong>Visor de carpetas</strong>: verás cualquier tipo de archivo organizado por carpetas.</li></ul></section><section aria-labelledby="help-previo"><h3 class="about-section-title" id="help-previo" tabindex="-1">Antes de compartir</h3><ul><li>Usa <strong>Previsualizar</strong> para comprobar que todo se ve bien.</li><li>Verifica que el enlace de tu nube sea público.</li></ul><p><strong>Consejo práctico</strong>: si actualizas un recurso, reemplaza el archivo original en la nube por el nuevo y el programa detectará automáticamente el cambio.</p></section><section aria-labelledby="help-limitacion"><h3 class="about-section-title" id="help-limitacion" tabindex="-1">Limitación de visualización (opcional)</h3><p>Puedes decidir cuándo se puede abrir el recurso desde <strong>Opciones</strong>:</p><ul><li>Activa la configuración de disponibilidad.</li><li>Define fecha y hora de inicio.</li><li>Si quieres, añade fecha y hora de fin.</li><li>Configura qué acciones del gestor estarán permitidas durante el acceso (compartir, insertar en web, descargar).</li></ul><p>Útil para programar recursos por días, semanas o periodos de evaluación.</p></section><section aria-labelledby="help-gestor"><h3 class="about-section-title" id="help-gestor" tabindex="-1">Gestor de recursos</h3><p>En el Gestor verás los recursos que has creado y abierto en este navegador. Desde ahí puedes abrir, copiar enlace, insertar en web, actualizar y eliminar.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privacidad y datos</h3><ul><li><strong>¿Dónde se guardan los recursos?</strong> En el almacenamiento local del navegador de cada dispositivo.</li><li><strong>¿Se suben mis recursos a GitHub o al programa?</strong> No. Tú alojas el ZIP en tu nube. El visor solo lo descarga y lo abre en el navegador.</li><li><strong>¿Se envían datos a terceros?</strong> No. Solo se realiza la descarga del ZIP desde el enlace público que tú has indicado.</li><li><strong>¿Qué pasa si borro datos del navegador o cambio de dispositivo?</strong> Los recursos locales desaparecen en ese navegador/dispositivo.</li><li><strong>¿Quién puede ver el recurso?</strong> Quien tenga el enlace del visor y, además, acceso al enlace público del ZIP.</li><li><strong>¿Cómo actualizo un recurso?</strong> Sustituye el ZIP en la nube manteniendo el mismo enlace y usa <strong>Actualizar</strong> en el gestor.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'El archivo es demasiado grande y Google Drive limita las descargas. Intenta usando Nextcloud, Dropbox u otro servicio.',
        loadZip: 'No se pudo cargar el ZIP.',
        restricted: 'Este recurso ya no está disponible por las restricciones de fecha.',
        embedNotAllowed: 'La inserción en web no está permitida para este recurso.',
        popupBlocked: 'El navegador bloqueó la ventana de previsualización. Permite ventanas emergentes para este sitio e inténtalo de nuevo.',
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
      documentViewer: {
        documentsTitle: 'Documentos',
        hideList: 'Ocultar lista',
        showList: 'Mostrar lista',
        loadingPdf: 'Cargando PDF...',
        failedPdf: 'No se pudo mostrar este PDF.',
        downloadPdf: 'Descargar PDF',
        prevPage: 'Anterior',
        nextPage: 'Siguiente',
        zoomIn: 'Acercar',
        zoomOut: 'Alejar',
        fitWidth: 'Ajustar al ancho',
        pageLabel: 'Página {current} / {total}',
        missingPdfEngine: 'No se pudo cargar el visor PDF.',
        loadingDocx: 'Cargando DOCX...',
        failedDocx: 'No se pudo mostrar este DOCX.',
        downloadDocx: 'Descargar DOCX',
        missingDocxEngine: 'No se pudo cargar el visor DOCX.'
      },
      folderViewer: {
        title: 'Modo carpeta',
        subtitle: 'Explora carpetas y subcarpetas con iconos por tipo de archivo.',
        searchPlaceholder: 'Buscar archivos...',
        searchResults: 'Resultados de búsqueda',
        selectAll: 'Seleccionar visibles (lista actual)',
        clearSelection: 'Quitar selección',
        openSelected: 'Abrir selección',
        downloadAll: 'Descargar todo',
        downloadSelected: 'Descargar selección',
        downloadVisible: 'Descargar visibles (lista actual)',
        noResults: 'No hay archivos para mostrar.',
        selectedCount: '{count} seleccionados',
        openFile: 'Abrir',
        downloadFile: 'Descargar',
        preparingFolder: 'Preparando carpeta...',
        folderReady: 'Carpeta exportada.',
        folderFailed: 'No se pudo exportar la carpeta.',
        preparingZip: 'Preparando ZIP...',
        zipReady: 'ZIP preparado.',
        zipFailed: 'No se pudo crear el ZIP.',
        contextOpen: 'Abrir',
        contextDownload: 'Descargar',
        contextDownloadVisible: 'Descargar visibles (lista actual)',
        folder: 'Carpeta',
        filesWord: 'archivos'
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
        theme: 'Tema',
        themeHint: 'Canviar tema',
        themeAuto: 'Automàtic',
        themeLight: 'Clar',
        themeDark: 'Fosc',
        subtitle: 'Autopublicació de recursos educatius en web (HTML) o en PDF i/o DOCX des del teu emmagatzematge al núvol.'
      },
      settings: {
        title: 'Ajustos de visibilitat',
        languageTitle: 'Idioma',
        restrictTitle: 'Accés per dates',
        restrictHint: 'Aquí pots definir quan estarà visible el recurs i quines accions estaran disponibles al gestor de recursos.',
        restrictToggle: 'Limitar l’accés',
        startLabel: 'Inici',
        endLabel: 'Fi',
        neverExpires: 'Accés amb data de fi',
        enforceEndDuringView: 'Desactiva la visualització en arribar a la data de fi, encara que estiga obert',
        warningMinutesLabel: 'Avisar abans en minuts (0 per no avisar)',
        warningMessageLabel: "Missatge d'avís",
        warningMessagePlaceholder: "El temps d'accés s'esgota en {minutes} minuts.",
        warningMessageDefault: "El temps d'accés s'esgota en {minutes} minuts.",
        periodHint: 'El recurs només serà visible dins d’aquest interval.',
        periodHintLiveEndOn: 'La visualització es desactivarà en arribar a la data de fi.',
        periodHintLiveEndOff: 'La visualització no es desactivarà automàticament en arribar a la data de fi.',
        periodHintWarningOn: 'Hi haurà avís {minutes} minuts abans.',
        periodHintWarningOff: 'No hi haurà avís previ.',
        summaryLiveEndOn: 'Es desactiva en arribar al final',
        summaryLiveEndOff: 'Sense desactivació automàtica',
        summaryWarningOn: 'Avís: {minutes} min abans',
        summaryWarningOff: 'Sense avís previ',
        summaryNoRestrictions: 'Recurs sense restriccions de visibilitat.',
        summaryAllowedActions: 'Accions del gestor de recursos: {actions}',
        summaryNoActions: 'cap',
        summaryBlockedActions: 'No es podrà: {actions}',
        summaryNoBlockedActions: 'cap',
        actionsTitle: 'Accions disponibles mentre el recurs sigui accessible',
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
        choice: {
          zipper: {
            title: 'Crear un ZIP (web, PDF o DOCX)',
            note: 'Crea un ZIP des de fitxers locals o des d’HTML. També pot incloure PDF i DOCX.',
            restrictHint: 'També pots aplicar una limitació d’accés per dates.'
          },
          main: {
            title: 'Ja tinc un ZIP al núvol amb enllaç',
            note: 'Enganxa l’enllaç públic (ZIP/ELPX) i crea l’enllaç del visor.',
            secondaryHtml: 'Si uses .elpx d’eXeLearning, també el pots obrir aquí <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Què és ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Un fitxer .elpx és un projecte d’eXeLearning que internament utilitza el format ZIP, cosa que permet al visor accedir al contingut i mostrar-lo correctament.</span></span>',
            elpxTooltip: 'Què és ELPX?',
            elpxTooltipHtml: 'Un fitxer .elpx és un projecte d’eXeLearning que internament utilitza el format ZIP, cosa que permet al visor accedir al contingut i mostrar-lo correctament.'
          }
        }
      },
      tabs: {
        label: 'Seccions'
      },
      main: {
        subtitle: "Si ja tens el teu recurs en format ZIP o .elpx en un servei amb <strong>enllaç públic</strong> (Drive, Dropbox, etc.), enganxa aquí l'enllaç per generar l’enllaç del visor.",
        form: {
          title: 'Ja tinc un ZIP al núvol amb enllaç',
          step: 'Enganxa l’enllaç públic al ZIP (o .elpx) i prem “Crear enllaç”.',
          placeholder: "Enganxa aquí l'enllaç públic del ZIP o del .elpx (també vàlid si inclou PDF o DOCX)",
          submit: 'Crear enllaç'
        },
        output: {
          title: 'Enllaç per compartir',
          step: '',
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
        checkUpdates: 'Comprovar actualitzacions',
        checkUpdatesHelp: 'Comprova si els ZIP han canviat al núvol.',
        checkUpdatesModalTitle: 'Comprovar actualitzacions',
        checkingUpdates: 'Comprovant actualitzacions...',
        checkUpdatesNote: 'Pots tancar aquesta finestra. La comprovació continuarà en segon pla.',
        checkUpdatesProgress: '{done} de {total}',
        checkUpdatesDoneSummary: 'Actualitzacions: {changed} de {total}.',
        checkUpdatesNone: 'No hi ha recursos desats.',
        checkUpdatesDone: 'Comprovació finalitzada.',
        checkUpdatesUnavailable: 'No es pot comprovar sense el backend configurat.',
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
          download: 'Descarregar fitxer',
          update: 'Actualitzar',
          updating: 'Actualitzant...',
          updated: 'Actualitzat'
        },
        editPrompt: 'Títol del recurs',
        empty: 'No hi ha recursos desats en aquest navegador.',
        siteNoUrl: 'Lloc sense URL',
        noDate: 'sense data'
      },
      badges: {
        scheduled: 'Programat',
        opening: 'Inici: {date}',
        closing: 'Fi: {date}',
        updateAvailable: 'Actualització disponible',
        updatedAt: 'Actualitzat: {date}'
      },
      updates: {
        title: 'Nova versió disponible',
        body: 'El recurs ha canviat al núvol. Pots actualitzar-lo ara.',
        action: 'Actualitzar',
        dismiss: 'Ara no'
      },
      zipper: {
        title: 'Crear ZIP per al visor',
        accordion: {
          filesTitle: 'El teu recurs té un o més fitxers? Crea aquí un ZIP'
        },
        subtitle: {
          item1: 'Per publicar el teu recurs, guarda tots els fitxers en una carpeta i comprimeix-la en un fitxer <strong>.zip</strong>. Pot contenir pàgines web i/o un o diversos <strong>PDF</strong>.',
          item2: 'Si el teu recurs està fet amb <strong>eXeLearning 3 o superior</strong>, pots usar directament el fitxer <strong>.elpx</strong>.',
          item3: 'Si uses <strong>eXeLearning 2.x</strong>, exporta el projecte a <strong>ZIP</strong> des del programa i continua amb l’opció <strong>“Ja tinc un ZIP”</strong>.'
        },
        exe: {
          tooltip: "eXeLearning: a la versió 3+ pots usar directament un .elpx (ja és un ZIP). Versió 2.x: Fitxer > Exportar > Lloc web > Arxiu comprimit ZIP. Versió 3.x: Fitxer > Descarregar com > Lloc web.",
          tooltipHtml: "<strong>eXeLearning:</strong><br>• Versió 3+: pots usar directament el fitxer <code>.elpx</code> (ja és un ZIP).<br>• Versió 2.x: Fitxer &gt; Exportar &gt; Lloc web &gt; Arxiu comprimit ZIP.<br>• Versió 3.x: Fitxer &gt; Descarregar com &gt; Lloc web."
        },
        step1: {
          title: 'Afegeix els teus fitxers',
          note: 'Arrossega la carpeta o selecciona els fitxers des del botó.'
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
          detail: 'En crear el ZIP es descarregarà un fitxer que pots pujar a Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Forçar visor de carpetes',
          forceFolderNote: 'Si actives aquesta opció, el ZIP s’obrirà en mode explorador de fitxers: veuràs el contingut com a fitxers organitzats en carpetes, fins i tot si inclou HTML o documents.',
          forceFolderTooltip: 'Més informació',
          forceFolderTooltipHtml: 'Si actives aquesta opció, el ZIP s’obrirà en mode explorador de fitxers: veuràs el contingut com a fitxers organitzats en carpetes, fins i tot si inclou HTML o documents.<br><br>Si no ho marques, el programa detectarà automàticament quin tipus de visor ha d’utilitzar.<br><br>Si no n’estàs segur, no ho marquis.'
        },
        zipName: {
          label: 'Nom del ZIP',
          placeholder: 'el_meu_recurs',
          default: 'el_meu_recurs'
        },
        resourceTitle: {
          label: 'Títol del recurs',
          placeholder: 'El meu recurs',
          toggleLabel: 'Posar un títol al recurs (títol actual: {title})',
          currentEmpty: 'sense títol'
        },
        build: 'Crear i descarregar ZIP',
        html: {
          title: 'No tens fitxers però tens el codi HTML? Enganxa’l aquí',
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
          title: 'Tens un ZIP o ELPX ja creat i vols afegir-hi restriccions de visibilitat? Puja’l aquí',
          note: 'Puja el teu ZIP i el visor afegirà les restriccions. Després l’hauràs de pujar a Drive, Dropbox, etc.',
          lockedText: 'Per fer servir aquesta opció, primer activa la limitació de visibilitat del recurs.',
          lockedAction: 'Activar limitació',
          lockedStatus: '',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restriccions i descarregar',
          status: {
            ready: '',
            working: 'Aplicant restriccions...',
            done: 'ZIP llest amb restriccions.',
            failed: 'No s’ha pogut modificar el ZIP. Revisa el fitxer.'
          },
          summaryTitle: 'Accés limitat per dates'
        },
        help: {
          inline: 'Si ja has creat un fitxer ZIP i l’has compartit en un servei amb enllaç públic, ves a la secció: “Ja tinc un ZIP al núvol amb enllaç”.',
          previewTitle: 'Previsualitza el recurs abans de descarregar-lo (opcional)',
          nextStepText: 'El següent pas és pujar i compartir amb enllaç públic el fitxer ZIP o ELPX. Quan el tinguis, prem “Continuar”.',
          previewAction: 'Previsualitzar',
          previewApplyRestrictions: 'Aplicar restriccions en la previsualització',
          previewApplyRestrictionsNote: 'Activa-ho per comprovar com s’obre i es tanca el recurs segons les dates configurades.',
          previewApplyRestrictionsInfo: 'Més informació',
          previewApplyRestrictionsInfoHtml: 'Fes-lo servir per comprovar com s’obre i es tanca el recurs segons les dates configurades.',
          goTab: 'Següent: “Ja tinc un ZIP al núvol amb enllaç”'
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
        body: '<nav class="about-index" data-help-nav aria-label="Índex d’ajuda"><p class="about-index__title">Índex</p><ul><li><a href="#help-objetiu">Objectiu</a></li><li><a href="#help-passos">Com compartir en 3 passos</a></li><li><a href="#help-opcions">Opcions per començar</a></li><li><a href="#help-visor">Quin visor es crea</a></li><li><a href="#help-previ">Abans de compartir</a></li><li><a href="#help-limitacio">Limitació de visualització</a></li><li><a href="#help-gestor">Gestor de recursos</a></li><li><a href="#help-faq">FAQ: privadesa i dades</a></li></ul></nav><section aria-labelledby="help-objetiu"><h3 class="about-section-title" id="help-objetiu" tabindex="-1">Objectiu</h3><p>Comparteix els teus materials amb l’alumnat mitjançant un enllaç, de manera simple i ràpida.</p></section><section aria-labelledby="help-passos"><h3 class="about-section-title" id="help-passos" tabindex="-1">Com compartir en 3 passos</h3><ol class="about-steps"><li>Prepara el recurs en un fitxer ZIP (si no el tens, el programa el crearà per tu).</li><li>Puja aquest ZIP al núvol (Drive, Dropbox, Nextcloud, etc.) i aconsegueix un enllaç públic.</li><li>Enganxa l’enllaç al visor i prem <strong>Crear enllaç</strong>.</li></ol><p>Fet: el programa et donarà l’enllaç final, que és el que comparteixes amb l’alumnat.</p></section><section aria-labelledby="help-opcions"><h3 class="about-section-title" id="help-opcions" tabindex="-1">Opcions per començar</h3><p><strong>A) Crear ZIP des de fitxers</strong>. Si ja tens el ZIP creat, passa a l’opció C.</p><ul><li>Si tens fitxers a l’ordinador, usa aquesta opció.</li><li>Afegeix carpeta o fitxers i prem <strong>Crear i descarregar ZIP</strong>.</li><li>Després puja aquest ZIP al núvol i comparteix-lo com a l’opció C.</li></ul><p><strong>B) Enganxar HTML</strong></p><ul><li>Si no tens ZIP però sí codi HTML, enganxa’l i crea el ZIP automàticament.</li></ul><p><strong>C) Ja tinc un ZIP/ELPX al núvol amb enllaç públic</strong></p><ul><li>Enganxa l’enllaç públic del ZIP o ELPX i crea l’enllaç del visor.</li></ul></section><section aria-labelledby="help-visor"><h3 class="about-section-title" id="help-visor" tabindex="-1">Quin visor es crea</h3><p>Segons el contingut, el sistema obre automàticament:</p><ul><li><strong>Visor web</strong> (pàgines HTML): veuràs el recurs com una pàgina web.</li><li><strong>Visor de documents</strong> (PDF i DOCX): veuràs els recursos com a documents.</li><li><strong>Visor de carpetes</strong>: veuràs qualsevol tipus de fitxer organitzat per carpetes.</li></ul></section><section aria-labelledby="help-previ"><h3 class="about-section-title" id="help-previ" tabindex="-1">Abans de compartir</h3><ul><li>Usa <strong>Previsualitzar</strong> per comprovar que tot es veu bé.</li><li>Verifica que l’enllaç del núvol sigui públic.</li></ul><p><strong>Consell pràctic</strong>: si actualitzes un recurs, reemplaça l’arxiu original al núvol pel nou i el programa detectarà automàticament el canvi.</p></section><section aria-labelledby="help-limitacio"><h3 class="about-section-title" id="help-limitacio" tabindex="-1">Limitació de visualització (opcional)</h3><p>Pots decidir quan es pot obrir el recurs des d’<strong>Opcions</strong>:</p><ul><li>Activa la configuració de disponibilitat.</li><li>Defineix data i hora d’inici.</li><li>Si vols, afegeix data i hora de fi.</li><li>Configura quines accions del gestor estaran permeses durant l’accés (compartir, inserir en web, descarregar).</li></ul><p>Útil per programar recursos per dies, setmanes o períodes d’avaluació.</p></section><section aria-labelledby="help-gestor"><h3 class="about-section-title" id="help-gestor" tabindex="-1">Gestor de recursos</h3><p>Al Gestor veuràs els recursos que has creat i obert en aquest navegador. Des d’aquí pots obrir, copiar enllaç, inserir en web, actualitzar i eliminar.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privadesa i dades</h3><ul><li><strong>On es guarden els recursos?</strong> A l’emmagatzematge local del navegador de cada dispositiu.</li><li><strong>Es pugen els meus recursos a GitHub o al programa?</strong> No. Tu allotges el ZIP al núvol. El visor només el descarrega i l’obre al navegador.</li><li><strong>S’envien dades a tercers?</strong> No. Només es fa la descàrrega del ZIP des de l’enllaç públic que has indicat.</li><li><strong>Què passa si esborro dades del navegador o canvio de dispositiu?</strong> Els recursos locals desapareixen en aquell navegador/dispositiu.</li><li><strong>Qui pot veure el recurs?</strong> Qui tingui l’enllaç del visor i, a més, accés a l’enllaç públic del ZIP.</li><li><strong>Com actualitzo un recurs?</strong> Substitueix el ZIP al núvol mantenint el mateix enllaç i usa <strong>Actualitzar</strong> al gestor.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'El fitxer és massa gran i Google Drive limita les descàrregues. Prova amb Nextcloud, Dropbox o un altre servei.',
        loadZip: 'No s’ha pogut carregar el ZIP.',
        restricted: 'Aquest recurs ja no està disponible per les restriccions de data.',
        embedNotAllowed: 'La inserció en web no està permesa per a aquest recurs.',
        popupBlocked: 'El navegador ha bloquejat la finestra de previsualització. Permet finestres emergents per a aquest lloc i torna-ho a provar.',
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
      documentViewer: {
        documentsTitle: 'Documents',
        hideList: 'Amagar llista',
        showList: 'Mostrar llista',
        loadingPdf: 'Carregant PDF...',
        failedPdf: 'No s\'ha pogut mostrar aquest PDF.',
        downloadPdf: 'Descarregar PDF',
        prevPage: 'Anterior',
        nextPage: 'Següent',
        zoomIn: 'Ampliar',
        zoomOut: 'Reduir',
        fitWidth: 'Ajustar a l\'amplada',
        pageLabel: 'Pàgina {current} / {total}',
        missingPdfEngine: 'No s\'ha pogut carregar el visor PDF.',
        loadingDocx: 'Carregant DOCX...',
        failedDocx: 'No s\'ha pogut mostrar aquest DOCX.',
        downloadDocx: 'Descarregar DOCX',
        missingDocxEngine: 'No s\'ha pogut carregar el visor DOCX.'
      },
      folderViewer: {
        title: 'Mode carpeta',
        subtitle: 'Explora carpetes i subcarpetes amb icones per tipus de fitxer.',
        searchPlaceholder: 'Cerca fitxers...',
        searchResults: 'Resultats de la cerca',
        selectAll: 'Seleccionar visibles',
        clearSelection: 'Netejar selecció',
        openSelected: 'Obrir seleccionats',
        downloadAll: 'Descarregar-ho tot',
        downloadSelected: 'Descarregar selecció',
        downloadVisible: 'Descarregar llista visible',
        noResults: 'No hi ha fitxers per mostrar.',
        selectedCount: '{count} seleccionats',
        openFile: 'Obrir',
        downloadFile: 'Descarregar',
        contextOpen: 'Obrir',
        contextDownload: 'Descarregar',
        contextDownloadVisible: 'Descarregar llista visible',
        folder: 'Carpeta',
        filesWord: 'fitxers'
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
        theme: 'Tema',
        themeHint: 'Cambiar tema',
        themeAuto: 'Automático',
        themeLight: 'Claro',
        themeDark: 'Escuro',
        subtitle: 'Autopublicación de recursos educativos en web (HTML) ou en PDF e/ou DOCX desde o teu almacenamento na nube.'
      },
      settings: {
        title: 'Axustes de visibilidade',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por datas',
        restrictHint: 'Aquí podes definir cando estará visible o recurso e que accións estarán dispoñibles no xestor de recursos.',
        restrictToggle: 'Limitar o acceso',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        neverExpires: 'Acceso con data de fin',
        enforceEndDuringView: 'Desactivar a visualización ao chegar á data de fin, mesmo se está aberto',
        warningMinutesLabel: 'Avisar antes en minutos (0 para non avisar)',
        warningMessageLabel: 'Mensaxe de aviso',
        warningMessagePlaceholder: 'O tempo de acceso esgótase en {minutes} minutos.',
        warningMessageDefault: 'O tempo de acceso esgótase en {minutes} minutos.',
        periodHint: 'O recurso só será visible dentro deste intervalo.',
        periodHintLiveEndOn: 'A visualización desactivarase ao chegar á data de fin.',
        periodHintLiveEndOff: 'A visualización non se desactivará automaticamente ao chegar á data de fin.',
        periodHintWarningOn: 'Haberá aviso {minutes} minutos antes.',
        periodHintWarningOff: 'Non haberá aviso previo.',
        summaryLiveEndOn: 'Desactívase ao chegar ao fin',
        summaryLiveEndOff: 'Sen desactivación automática',
        summaryWarningOn: 'Aviso: {minutes} min antes',
        summaryWarningOff: 'Sen aviso previo',
        summaryNoRestrictions: 'Recurso sen restricións de visibilidade.',
        summaryAllowedActions: 'Accións do xestor de recursos: {actions}',
        summaryNoActions: 'ningunha',
        summaryBlockedActions: 'Non se poderá: {actions}',
        summaryNoBlockedActions: 'ningunha',
        actionsTitle: 'Accións dispoñibles mentres o recurso sexa accesible',
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
        choice: {
          zipper: {
            title: 'Crear un ZIP (web, PDF ou DOCX)',
            note: 'Crea un ZIP desde ficheiros locais ou desde HTML. Tamén pode incluír PDF e DOCX.',
            restrictHint: 'Tamén podes aplicar limitación de acceso por datas.'
          },
          main: {
            title: 'Xa teño un ZIP na nube con ligazón',
            note: 'Pega a ligazón pública (ZIP/ELPX) e crea a ligazón do visor.',
            secondaryHtml: 'Se usas .elpx de eXeLearning, tamén o podes abrir aquí <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Que é ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Un ficheiro .elpx é un proxecto de eXeLearning que internamente utiliza o formato ZIP, o que permite que o visor acceda ao seu contido e o mostre correctamente.</span></span>',
            elpxTooltip: 'Que é ELPX?',
            elpxTooltipHtml: 'Un ficheiro .elpx é un proxecto de eXeLearning que internamente utiliza o formato ZIP, o que permite que o visor acceda ao seu contido e o mostre correctamente.'
          }
        }
      },
      tabs: {
        label: 'Seccións'
      },
      main: {
        subtitle: 'Se xa tes o teu recurso en formato ZIP ou .elpx nun servizo con <strong>ligazón pública</strong> (Drive, Dropbox, etc.), pega aquí a ligazón para xerar a ligazón do visor.',
        form: {
          title: 'Xa teño un ZIP na nube con ligazón',
          step: 'Pega a ligazón pública ao ZIP (ou .elpx) e preme “Crear ligazón”.',
          placeholder: 'Pega aquí a ligazón pública do ZIP ou do .elpx (tamén válida se inclúe PDF ou DOCX)',
          submit: 'Crear ligazón'
        },
        output: {
          title: 'Ligazón para compartir',
          step: '',
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
        checkUpdates: 'Comprobar actualizacións',
        checkUpdatesHelp: 'Comproba se os ZIP cambiaron na nube.',
        checkUpdatesModalTitle: 'Comprobar actualizacións',
        checkingUpdates: 'Comprobando actualizacións...',
        checkUpdatesNote: 'Podes pechar esta xanela. A comprobación seguirá en segundo plano.',
        checkUpdatesProgress: '{done} de {total}',
        checkUpdatesDoneSummary: 'Actualizacións: {changed} de {total}.',
        checkUpdatesNone: 'Non hai recursos gardados.',
        checkUpdatesDone: 'Comprobación finalizada.',
        checkUpdatesUnavailable: 'Non se pode comprobar sen o backend configurado.',
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
          download: 'Descargar ficheiro',
          update: 'Actualizar',
          updating: 'Actualizando...',
          updated: 'Actualizado'
        },
        editPrompt: 'Título do recurso',
        empty: 'Non hai recursos gardados neste navegador.',
        siteNoUrl: 'Sitio sen URL',
        noDate: 'sen data'
      },
      badges: {
        scheduled: 'Programado',
        opening: 'Inicio: {date}',
        closing: 'Fin: {date}',
        updateAvailable: 'Actualización dispoñible',
        updatedAt: 'Actualizado: {date}'
      },
      updates: {
        title: 'Nova versión dispoñible',
        body: 'O recurso cambiou na nube. Podes actualizalo agora.',
        action: 'Actualizar',
        dismiss: 'Agora non'
      },
      zipper: {
        title: 'Crear ZIP para o visor',
        accordion: {
          filesTitle: 'O teu recurso ten un ou máis ficheiros? Crea aquí un ZIP'
        },
        subtitle: {
          item1: 'Para publicar o teu recurso, garda todos os ficheiros nun cartafol e comprímeo nun ficheiro <strong>.zip</strong>. Pode conter páxinas web e/ou un ou varios <strong>PDF</strong>.',
          item2: 'Se o teu recurso está feito con <strong>eXeLearning 3 ou superior</strong>, podes usar directamente o ficheiro <strong>.elpx</strong>.',
          item3: 'Se usas <strong>eXeLearning 2.x</strong>, exporta o proxecto a <strong>ZIP</strong> desde o programa e continúa coa opción <strong>“Xa teño un ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: na versión 3+ podes usar directamente un .elpx (xa é un ZIP). Versión 2.x: Arquivo > Exportar > Sitio web > Arquivo comprimido ZIP. Versión 3.x: Arquivo > Descargar como > Sitio web.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Versión 3+: podes usar directamente o ficheiro <code>.elpx</code> (xa é un ZIP).<br>• Versión 2.x: Arquivo &gt; Exportar &gt; Sitio web &gt; Arquivo comprimido ZIP.<br>• Versión 3.x: Arquivo &gt; Descargar como &gt; Sitio web.'
        },
        step1: {
          title: 'Engade os teus ficheiros',
          note: 'Arrastra o cartafol ou selecciona os ficheiros desde o botón.'
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
          detail: 'Ao crear o ZIP descargarase un ficheiro que podes subir a Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Forzar visor de cartafoles',
          forceFolderNote: 'Se activas esta opción, o ZIP abrirase en modo explorador de ficheiros: verás o contido como ficheiros organizados en cartafoles, mesmo cando inclúa HTML ou documentos.',
          forceFolderTooltip: 'Máis información',
          forceFolderTooltipHtml: 'Se activas esta opción, o ZIP abrirase en modo explorador de ficheiros: verás o contido como ficheiros organizados en cartafoles, mesmo cando inclúa HTML ou documentos.<br><br>Se non o marcas, o programa detectará automaticamente o tipo de visor que empregará.<br><br>Se non estás seguro, non o marques.'
        },
        zipName: {
          label: 'Nome do ZIP',
          placeholder: 'meu_recurso',
          default: 'meu_recurso'
        },
        resourceTitle: {
          label: 'Título do recurso',
          placeholder: 'O meu recurso',
          toggleLabel: 'Poñer un título ao recurso (título actual: {title})',
          currentEmpty: 'sen título'
        },
        build: 'Crear e descargar ZIP',
        html: {
          title: 'Non tes ficheiros pero tes o código HTML? Pégao aquí',
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
          title: 'Tes un ZIP ou ELPX xa creado e queres engadirlle restricións de visibilidade? Súbeo aquí',
          note: 'Sube o teu ZIP e o visor engadirá as restricións. Despois terás que subilo a Drive, Dropbox, etc.',
          lockedText: 'Para usar esta opción, primeiro activa a limitación de visibilidade do recurso.',
          lockedAction: 'Activar limitación',
          lockedStatus: '',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restricións e descargar',
          status: {
            ready: '',
            working: 'Aplicando restricións...',
            done: 'ZIP listo con restricións.',
            failed: 'Non se puido modificar o ZIP. Revisa o ficheiro.'
          },
          summaryTitle: 'Acceso limitado por datas'
        },
        help: {
          inline: 'Se xa creaches un arquivo ZIP e o compartiches nun servizo con ligazón pública, vai á sección: “Xa teño un ZIP na nube con ligazón”.',
          previewTitle: 'Previsualiza o recurso antes de descargalo (opcional)',
          nextStepText: 'O seguinte paso é subir e compartir cunha ligazón pública o arquivo ZIP ou ELPX. Cando o teñas, preme en “Continuar”.',
          previewAction: 'Previsualizar',
          previewApplyRestrictions: 'Aplicar restricións na previsualización',
          previewApplyRestrictionsNote: 'Actívao para comprobar como se abre e se pecha o recurso segundo as datas configuradas.',
          previewApplyRestrictionsInfo: 'Máis información',
          previewApplyRestrictionsInfoHtml: 'Úsao para comprobar como se abre e se pecha o recurso segundo as datas configuradas.',
          goTab: 'Seguinte: “Xa teño un ZIP na nube con ligazón”'
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
        body: '<nav class="about-index" data-help-nav aria-label="Índice de axuda"><p class="about-index__title">Índice</p><ul><li><a href="#help-obxectivo">Obxectivo</a></li><li><a href="#help-pasos">Como compartir en 3 pasos</a></li><li><a href="#help-opcions">Opcións para empezar</a></li><li><a href="#help-visor">Que visor se crea</a></li><li><a href="#help-previo">Antes de compartir</a></li><li><a href="#help-limitacion">Limitación de visualización</a></li><li><a href="#help-gestor">Xestor de recursos</a></li><li><a href="#help-faq">FAQ: privacidade e datos</a></li></ul></nav><section aria-labelledby="help-obxectivo"><h3 class="about-section-title" id="help-obxectivo" tabindex="-1">Obxectivo</h3><p>Comparte os teus materiais co alumnado mediante unha ligazón, de forma sinxela e rápida.</p></section><section aria-labelledby="help-pasos"><h3 class="about-section-title" id="help-pasos" tabindex="-1">Como compartir en 3 pasos</h3><ol class="about-steps"><li>Prepara o teu recurso nun arquivo ZIP (se non o tes, o programa farao por ti).</li><li>Sube ese ZIP á túa nube (Drive, Dropbox, Nextcloud, etc.) e consegue ligazón pública.</li><li>Pega a ligazón no visor e preme <strong>Crear ligazón</strong>.</li></ol><p>Listo: o programa darache a ligazón final, que é a que compartes co alumnado.</p></section><section aria-labelledby="help-opcions"><h3 class="about-section-title" id="help-opcions" tabindex="-1">Opcións para empezar</h3><p><strong>A) Crear ZIP desde ficheiros</strong>. Se xa tes o ZIP creado, pasa á opción C.</p><ul><li>Se tes os ficheiros no teu ordenador, usa esta opción.</li><li>Engade cartafol ou ficheiros e preme <strong>Crear e descargar ZIP</strong>.</li><li>Despois sobe ese ZIP á túa nube e compárteo como na opción C.</li></ul><p><strong>B) Pegar HTML</strong></p><ul><li>Se non tes ZIP pero si código HTML, pégao e crea o ZIP automaticamente.</li></ul><p><strong>C) Xa teño un ZIP/ELPX na nube con ligazón pública</strong></p><ul><li>Pega a ligazón pública do ZIP ou ELPX e crea a ligazón do visor.</li></ul></section><section aria-labelledby="help-visor"><h3 class="about-section-title" id="help-visor" tabindex="-1">Que visor se crea</h3><p>Segundo o contido, o sistema abre automaticamente:</p><ul><li><strong>Visor web</strong> (páxinas HTML): verás o recurso como páxina web.</li><li><strong>Visor de documentos</strong> (PDF e DOCX): verás os recursos como documentos.</li><li><strong>Visor de cartafoles</strong>: verás calquera tipo de ficheiro organizado por cartafoles.</li></ul></section><section aria-labelledby="help-previo"><h3 class="about-section-title" id="help-previo" tabindex="-1">Antes de compartir</h3><ul><li>Usa <strong>Previsualizar</strong> para comprobar que todo se ve ben.</li><li>Verifica que a ligazón da túa nube sexa pública.</li></ul><p><strong>Consello práctico</strong>: se actualizas un recurso, substitúe o arquivo orixinal na nube polo novo e o programa detectará automaticamente o cambio.</p></section><section aria-labelledby="help-limitacion"><h3 class="about-section-title" id="help-limitacion" tabindex="-1">Limitación de visualización (opcional)</h3><p>Podes decidir cando se pode abrir o recurso desde <strong>Opcións</strong>:</p><ul><li>Activa a configuración de dispoñibilidade.</li><li>Define data e hora de inicio.</li><li>Se queres, engade data e hora de fin.</li><li>Configura que accións do xestor estarán permitidas durante o acceso (compartir, inserir en web, descargar).</li></ul><p>Útil para programar recursos por días, semanas ou períodos de avaliación.</p></section><section aria-labelledby="help-gestor"><h3 class="about-section-title" id="help-gestor" tabindex="-1">Xestor de recursos</h3><p>No Xestor verás os recursos que creaches e abríches neste navegador. Desde aí podes abrir, copiar ligazón, inserir en web, actualizar e eliminar.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privacidade e datos</h3><ul><li><strong>Onde se gardan os recursos?</strong> No almacenamento local do navegador de cada dispositivo.</li><li><strong>Suben os meus recursos a GitHub ou ao programa?</strong> Non. Ti aloxas o ZIP na túa nube. O visor só o descarga e o abre no navegador.</li><li><strong>Envíanse datos a terceiros?</strong> Non. Só se realiza a descarga do ZIP desde a ligazón pública que indicaches.</li><li><strong>Que pasa se borro datos do navegador ou cambio de dispositivo?</strong> Os recursos locais desaparecen nese navegador/dispositivo.</li><li><strong>Quen pode ver o recurso?</strong> Quen teña a ligazón do visor e, ademais, acceso á ligazón pública do ZIP.</li><li><strong>Como actualizo un recurso?</strong> Substitúe o ZIP na nube mantendo a mesma ligazón e usa <strong>Actualizar</strong> no xestor.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'O ficheiro é demasiado grande e Google Drive limita as descargas. Proba con Nextcloud, Dropbox ou outro servizo.',
        loadZip: 'Non se puido cargar o ZIP.',
        restricted: 'Este recurso xa non está dispoñible polas restricións de data.',
        embedNotAllowed: 'A inserción en web non está permitida para este recurso.',
        popupBlocked: 'O navegador bloqueou a xanela de previsualización. Permite as ventás emerxentes para este sitio e téntao de novo.',
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
      documentViewer: {
        documentsTitle: 'Documentos',
        hideList: 'Ocultar lista',
        showList: 'Amosar lista',
        loadingPdf: 'Cargando PDF...',
        failedPdf: 'Non se puido mostrar este PDF.',
        downloadPdf: 'Descargar PDF',
        prevPage: 'Anterior',
        nextPage: 'Seguinte',
        zoomIn: 'Achegar',
        zoomOut: 'Afastar',
        fitWidth: 'Axustar ao ancho',
        pageLabel: 'Páxina {current} / {total}',
        missingPdfEngine: 'Non se puido cargar o visor PDF.',
        loadingDocx: 'Cargando DOCX...',
        failedDocx: 'Non se puido mostrar este DOCX.',
        downloadDocx: 'Descargar DOCX',
        missingDocxEngine: 'Non se puido cargar o visor DOCX.'
      },
      folderViewer: {
        title: 'Modo cartafol',
        subtitle: 'Explora cartafoles e subcartafoles con iconas por tipo de ficheiro.',
        searchPlaceholder: 'Buscar ficheiros...',
        searchResults: 'Resultados da busca',
        selectAll: 'Seleccionar visibles',
        clearSelection: 'Limpar selección',
        openSelected: 'Abrir seleccionados',
        downloadAll: 'Descargar todo',
        downloadSelected: 'Descargar selección',
        downloadVisible: 'Descargar lista visible',
        noResults: 'Non hai ficheiros para amosar.',
        selectedCount: '{count} seleccionados',
        openFile: 'Abrir',
        downloadFile: 'Descargar',
        contextOpen: 'Abrir',
        contextDownload: 'Descargar',
        contextDownloadVisible: 'Descargar lista visible',
        folder: 'Cartafol',
        filesWord: 'ficheiros'
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
        theme: 'Gaia',
        themeHint: 'Gaia aldatu',
        themeAuto: 'Automatikoa',
        themeLight: 'Argia',
        themeDark: 'Iluna',
        subtitle: 'Webean (HTML) edo PDF eta/edo DOCX formatuan hezkuntza-baliabideak autoargitaratzea zure hodeiko biltegiratzetik.'
      },
      settings: {
        title: 'Ikusgarritasun ezarpenak',
        languageTitle: 'Hizkuntza',
        restrictTitle: 'Sarbidea daten bidez',
        restrictHint: 'Hemen zehaztu dezakezu baliabidea noiz egongo den ikusgai eta zein ekintza egongo diren eskuragarri baliabideen kudeatzailean.',
        restrictToggle: 'Sarbidea mugatu',
        startLabel: 'Hasiera',
        endLabel: 'Amaiera',
        neverExpires: 'Amaiera-datarekin sarbidea',
        enforceEndDuringView: 'Bistaratzea desaktibatu amaiera-datara iristean, irekita badago ere',
        warningMinutesLabel: 'Abisatu lehenago minutuetan (0 abisurik ez)',
        warningMessageLabel: 'Abisu mezua',
        warningMessagePlaceholder: 'Sarbide-denbora {minutes} minututan amaituko da.',
        warningMessageDefault: 'Sarbide-denbora {minutes} minututan amaituko da.',
        periodHint: 'Baliabidea tarte honetan bakarrik egongo da ikusgai.',
        periodHintLiveEndOn: 'Bistaratzea amaiera-datara iristean desaktibatuko da.',
        periodHintLiveEndOff: 'Bistaratzea ez da automatikoki desaktibatuko amaiera-datara iristean.',
        periodHintWarningOn: 'Abisua {minutes} minutu lehenago emango da.',
        periodHintWarningOff: 'Ez da aurretiazko abisurik egongo.',
        summaryLiveEndOn: 'Amaierara iristean desaktibatzen da',
        summaryLiveEndOff: 'Ez dago desaktibazio automatikorik',
        summaryWarningOn: 'Abisua: {minutes} min lehenago',
        summaryWarningOff: 'Ez dago aurretiazko abisurik',
        summaryNoRestrictions: 'Baliabidea ikusgarritasun-murrizketarik gabe.',
        summaryAllowedActions: 'Baliabideen kudeatzaileko ekintzak: {actions}',
        summaryNoActions: 'bat ere ez',
        summaryBlockedActions: 'Ezin izango da: {actions}',
        summaryNoBlockedActions: 'bat ere ez',
        actionsTitle: 'Ekintzak baliabidea eskuragarri dagoen bitartean',
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
        choice: {
          zipper: {
            title: 'Sortu ZIP bat (web, PDF edo DOCX)',
            note: 'Sortu ZIP bat fitxategi lokaletatik edo HTMLtik. PDF eta DOCX ere izan ditzake.',
            restrictHint: 'Sarbidea datekin mugatzeko aukera ere baduzu.'
          },
          main: {
            title: 'ZIP bat hodeian daukat estekarekin',
            note: 'Itsatsi esteka publikoa (ZIP/ELPX) eta sortu bisorearen esteka.',
            secondaryHtml: 'eXeLearning-eko .elpx erabiltzen baduzu, hemen ere ireki dezakezu <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Zer da ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">.elpx fitxategia eXeLearning-eko proiektu bat da, eta barnean ZIP formatua erabiltzen du; horri esker, bisoreak edukira sartu eta behar bezala bistaratu dezake.</span></span>',
            elpxTooltip: 'Zer da ELPX?',
            elpxTooltipHtml: '.elpx fitxategia eXeLearning-eko proiektu bat da, eta barnean ZIP formatua erabiltzen du; horri esker, bisoreak edukira sartu eta behar bezala bistaratu dezake.'
          }
        }
      },
      tabs: {
        label: 'Atalak'
      },
      main: {
        subtitle: 'Zure baliabidea ZIP edo .elpx formatuan baduzu eta <strong>esteka publikoa</strong> duen zerbitzu batean badago (Drive, Dropbox, etab.), itsatsi hemen esteka bisorearen esteka sortzeko.',
        form: {
          title: 'ZIP bat hodeian daukat estekarekin',
          step: 'Itsatsi ZIParen esteka publikoa (edo .elpx) eta sakatu “Esteka sortu”.',
          placeholder: 'Itsatsi hemen ZIParen edo .elpx fitxategiaren esteka publikoa (PDF edo DOCX badu ere balio du)',
          submit: 'Esteka sortu'
        },
        output: {
          title: 'Partekatze esteka',
          step: '',
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
        checkUpdates: 'Eguneratzeak egiaztatu',
        checkUpdatesHelp: 'Egiaztatu ZIPak hodeian aldatu diren.',
        checkUpdatesModalTitle: 'Eguneratzeak egiaztatu',
        checkingUpdates: 'Eguneratzeak egiaztatzen...',
        checkUpdatesNote: 'Leiho hau itxi dezakezu. Egiaztapena atzeko planoan jarraituko du.',
        checkUpdatesProgress: '{done} / {total}',
        checkUpdatesDoneSummary: 'Eguneraketak: {changed} / {total}.',
        checkUpdatesNone: 'Ez dago gordetako baliabiderik.',
        checkUpdatesDone: 'Egiaztapena amaituta.',
        checkUpdatesUnavailable: 'Ezin da egiaztatu backend konfiguratu gabe.',
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
          download: 'Fitxategia deskargatu',
          update: 'Eguneratu',
          updating: 'Eguneratzen...',
          updated: 'Eguneratuta'
        },
        editPrompt: 'Baliabidearen izenburua',
        empty: 'Ez dago gordetako baliabiderik nabigatzaile honetan.',
        siteNoUrl: 'URLrik gabeko gunea',
        noDate: 'datarik gabe'
      },
      badges: {
        scheduled: 'Programatua',
        opening: 'Hasiera: {date}',
        closing: 'Amaiera: {date}',
        updateAvailable: 'Eguneraketa eskuragarri',
        updatedAt: 'Eguneratua: {date}'
      },
      updates: {
        title: 'Bertsio berria eskuragarri',
        body: 'Baliabidea hodeian aldatu da. Orain eguneratu dezakezu.',
        action: 'Eguneratu',
        dismiss: 'Orain ez'
      },
      zipper: {
        title: 'Sortu ZIPa bisorerako',
        accordion: {
          filesTitle: 'Zure baliabideak fitxategi bat edo gehiago ditu? Sortu hemen ZIP bat'
        },
        subtitle: {
          item1: 'Zure baliabidea argitaratzeko, gorde fitxategi guztiak karpeta batean eta konprimitu <strong>.zip</strong> fitxategi batean. Web-orriak eta/edo <strong>PDF</strong> bat edo gehiago izan ditzake.',
          item2: 'Zure baliabidea <strong>eXeLearning 3 edo goragokoarekin</strong> egina badago, <strong>.elpx</strong> fitxategia zuzenean erabil dezakezu.',
          item3: '<strong>eXeLearning 2.x</strong> erabiltzen baduzu, esportatu proiektua <strong>ZIP</strong>era programatik eta jarraitu <strong>“ZIP bat badaukat”</strong> aukerarekin.'
        },
        exe: {
          tooltip: 'eXeLearning: 3+ bertsioan .elpx zuzenean erabil dezakezu (dagoeneko ZIP bat da). 2.x bertsioa: Fitxategia > Esportatu > Webgunea > ZIP fitxategi konprimatua. 3.x bertsioa: Fitxategia > Deskargatu honela > Webgunea.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• 3+ bertsioa: <code>.elpx</code> fitxategia zuzenean erabil dezakezu (dagoeneko ZIP bat da).<br>• 2.x bertsioa: Fitxategia &gt; Esportatu &gt; Webgunea &gt; ZIP fitxategi konprimatua.<br>• 3.x bertsioa: Fitxategia &gt; Deskargatu honela &gt; Webgunea.'
        },
        step1: {
          title: 'Gehitu zure fitxategiak',
          note: 'Arrastatu karpeta edo hautatu fitxategiak botoitik.'
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
          detail: 'ZIPa sortzean, fitxategi bat deskargatuko da (Drive, Dropbox, Nextcloud, etab. igo dezakezu).',
          forceFolderLabel: 'Karpeten bisorea behartu',
          forceFolderNote: 'Aukera hau aktibatuz gero, ZIPa fitxategi-esploratzaile moduan irekiko da: edukia karpetetan antolatutako fitxategi gisa ikusiko duzu, HTML edo dokumentuak baditu ere.',
          forceFolderTooltip: 'Informazio gehiago',
          forceFolderTooltipHtml: 'Aukera hau aktibatuz gero, ZIPa fitxategi-esploratzaile moduan irekiko da: edukia karpetetan antolatutako fitxategi gisa ikusiko duzu, HTML edo dokumentuak baditu ere.<br><br>Ez baduzu markatzen, programak automatikoki hautemango du zein bisore mota erabili behar den.<br><br>Ziur ez bazaude, ez markatu.'
        },
        zipName: {
          label: 'ZIParen izena',
          placeholder: 'nire_baliabidea',
          default: 'nire_baliabidea'
        },
        resourceTitle: {
          label: 'Baliabidearen izenburua',
          placeholder: 'Nire baliabidea',
          toggleLabel: 'Jarri izenburua baliabideari (egungo izenburua: {title})',
          currentEmpty: 'izenbururik gabe'
        },
        build: 'Sortu eta deskargatu ZIPa',
        html: {
          title: 'Ez duzu fitxategirik baina HTML kodea baduzu? Itsatsi hemen',
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
          title: 'Jada sortutako ZIP edo ELPX bat duzu eta ikusgarritasun-murrizketak gehitu nahi dizkiozu? Igo hemen',
          note: 'Igo zure ZIPa eta bisoreak murrizketak gehituko ditu. Ondoren Drive, Dropbox, etab. zerbitzuetara igo beharko duzu.',
          lockedText: 'Aukera hau erabiltzeko, lehenik aktibatu baliabidearen ikusgarritasun-muga.',
          lockedAction: 'Aktibatu muga',
          lockedStatus: '',
          pick: 'ZIPa hautatu',
          apply: 'Murrizketak aplikatu eta deskargatu',
          status: {
            ready: '',
            working: 'Murrizketak aplikatzen...',
            done: 'ZIPa prest murrizketekin.',
            failed: 'Ezin izan da ZIPa aldatu. Berrikusi fitxategia.'
          },
          summaryTitle: 'Sarbide mugatua daten arabera'
        },
        help: {
          inline: 'ZIP fitxategi bat sortu eta esteka publikoarekin duen zerbitzu batean partekatu baduzu, joan atalera: “ZIP bat badaukat edo ELPX”.',
          previewTitle: 'Aurreikusi baliabidea deskargatu aurretik (aukerakoa)',
          nextStepText: 'Hurrengo urratsa ZIP edo ELPX fitxategia esteka publikoarekin igo eta partekatzea da. Prest duzunean, sakatu “Jarraitu”.',
          previewAction: 'Aurreikusi',
          previewApplyRestrictions: 'Murrizketak aplikatu aurrebistan',
          previewApplyRestrictionsNote: 'Aktibatu baliabidea nola irekitzen eta ixten den egiaztatzeko, konfiguratutako daten arabera.',
          previewApplyRestrictionsInfo: 'Informazio gehiago',
          previewApplyRestrictionsInfoHtml: 'Erabili baliabidea nola irekitzen eta ixten den egiaztatzeko, konfiguratutako daten arabera.',
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
        body: '<nav class="about-index" data-help-nav aria-label="Laguntzaren aurkibidea"><p class="about-index__title">Aurkibidea</p><ul><li><a href="#help-helburua">Helburua</a></li><li><a href="#help-pausoak">Nola partekatu 3 pausotan</a></li><li><a href="#help-aukerak">Hasteko aukerak</a></li><li><a href="#help-ikuslea">Zein bisore sortzen da</a></li><li><a href="#help-aurretik">Partekatu aurretik</a></li><li><a href="#help-muga">Ikusgarritasun muga</a></li><li><a href="#help-kudeatzailea">Baliabideen kudeatzailea</a></li><li><a href="#help-faq">FAQ: pribatutasuna eta datuak</a></li></ul></nav><section aria-labelledby="help-helburua"><h3 class="about-section-title" id="help-helburua" tabindex="-1">Helburua</h3><p>Partekatu zure materialak ikasleekin esteka baten bidez, modu erraz eta azkarrean.</p></section><section aria-labelledby="help-pausoak"><h3 class="about-section-title" id="help-pausoak" tabindex="-1">Nola partekatu 3 pausotan</h3><ol class="about-steps"><li>Prestatu zure baliabidea ZIP fitxategi batean (ez baduzu, programak sortuko du).</li><li>Igo ZIP hori zure hodeira (Drive, Dropbox, Nextcloud, etab.) eta lortu esteka publikoa.</li><li>Itsatsi esteka bisorean eta sakatu <strong>Esteka sortu</strong>.</li></ol><p>Prest: programak azken esteka emango dizu, eta hori partekatuko duzu ikasleekin.</p></section><section aria-labelledby="help-aukerak"><h3 class="about-section-title" id="help-aukerak" tabindex="-1">Hasteko aukerak</h3><p><strong>A) ZIPa fitxategietatik sortu</strong>. ZIPa eginda baduzu, joan C aukerara.</p><ul><li>Zure ordenagailuan fitxategiak badituzu, erabili aukera hau.</li><li>Gehitu karpeta edo fitxategiak eta sakatu <strong>Sortu eta deskargatu ZIPa</strong>.</li><li>Ondoren igo ZIPa hodeira eta partekatu C aukeran bezala.</li></ul><p><strong>B) HTMLa itsatsi</strong></p><ul><li>ZIPik ez baduzu baina HTML kodea baduzu, itsatsi eta ZIPa automatikoki sortu.</li></ul><p><strong>C) Dagoeneko ZIP/ELPX bat dut hodeian esteka publikoarekin</strong></p><ul><li>Itsatsi ZIP edo ELPX esteka publikoa eta sortu bisorearen esteka.</li></ul></section><section aria-labelledby="help-ikuslea"><h3 class="about-section-title" id="help-ikuslea" tabindex="-1">Zein bisore sortzen da</h3><p>Edukien arabera, sistemak automatikoki irekitzen du:</p><ul><li><strong>Web bisorea</strong> (HTML orriak): baliabidea web orri gisa ikusiko duzu.</li><li><strong>Dokumentu bisorea</strong> (PDF eta DOCX): baliabideak dokumentu gisa ikusiko dituzu.</li><li><strong>Karpeta bisorea</strong>: edozein fitxategi mota ikusiko duzu karpetatan antolatuta.</li></ul></section><section aria-labelledby="help-aurretik"><h3 class="about-section-title" id="help-aurretik" tabindex="-1">Partekatu aurretik</h3><ul><li>Erabili <strong>Aurrebista</strong> dena ondo ikusten dela egiaztatzeko.</li><li>Egiaztatu zure hodeiko esteka publikoa dela.</li></ul><p><strong>Aholku praktikoa</strong>: baliabidea eguneratzen baduzu, ordezkatu hodeiko jatorrizko fitxategia berriarekin, eta programak aldaketa automatikoki detektatuko du.</p></section><section aria-labelledby="help-muga"><h3 class="about-section-title" id="help-muga" tabindex="-1">Ikusgarritasun muga (aukerazkoa)</h3><p><strong>Aukerak</strong> atalean baliabidea noiz ireki daitekeen erabaki dezakezu:</p><ul><li>Aktibatu erabilgarritasun konfigurazioa.</li><li>Zehaztu hasiera data eta ordua.</li><li>Nahi baduzu, gehitu amaiera data eta ordua.</li><li>Sarbidean zehar kudeatzaileko zein ekintza baimenduko diren konfiguratu (partekatu, webean txertatu, deskargatu).</li></ul><p>Erabilgarria da baliabideak egunez, astez edo ebaluazio-aldiaren arabera programatzeko.</p></section><section aria-labelledby="help-kudeatzailea"><h3 class="about-section-title" id="help-kudeatzailea" tabindex="-1">Baliabideen kudeatzailea</h3><p>Kudeatzailean nabigatzaile honetan sortu eta ireki dituzun baliabideak ikusiko dituzu. Handik ireki, esteka kopiatu, webean txertatu, eguneratu eta ezabatu dezakezu.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: pribatutasuna eta datuak</h3><ul><li><strong>Non gordetzen dira baliabideak?</strong> Gailu bakoitzeko nabigatzailearen biltegiratze lokalean.</li><li><strong>Nire baliabideak GitHubera edo programara igotzen dira?</strong> Ez. Zuk ostatatzen duzu ZIPa zure hodeian. Bisoreak deskargatu eta nabigatzailean irekitzen du soilik.</li><li><strong>Datuak hirugarrenei bidaltzen zaizkie?</strong> Ez. Zuk adierazitako esteka publikotik ZIPa deskargatzea baino ez da egiten.</li><li><strong>Zer gertatzen da nabigatzaileko datuak ezabatzen baditut edo gailua aldatzen badut?</strong> Baliabide lokalak desagertu egiten dira nabigatzaile/gailu horretan.</li><li><strong>Nork ikus dezake baliabidea?</strong> Bisorearen esteka duenak eta, gainera, ZIParen esteka publikorako sarbidea duenak.</li><li><strong>Nola eguneratzen da baliabide bat?</strong> Ordezkatu ZIPa hodeian esteka bera mantenduta, eta erabili <strong>Eguneratu</strong> kudeatzailean.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'Fitxategia handiegia da eta Google Drivek deskargak mugatzen ditu. Saiatu Nextcloud, Dropbox edo beste zerbitzu batekin.',
        loadZip: 'Ezin izan da ZIPa kargatu.',
        restricted: 'Baliabide hau ez dago eskuragarri data-murrizketengatik.',
        embedNotAllowed: 'Web-ean txertatzea ez dago baimenduta baliabide honetarako.',
        popupBlocked: 'Nabigatzaileak aurrebistaren leihoa blokeatu du. Baimendu popup leihoak gune honetarako eta saiatu berriro.',
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
      documentViewer: {
        documentsTitle: 'Dokumentuak',
        hideList: 'Zerrenda ezkutatu',
        showList: 'Zerrenda erakutsi',
        loadingPdf: 'PDFa kargatzen...',
        failedPdf: 'Ezin izan da PDF hau bistaratu.',
        downloadPdf: 'PDFa deskargatu',
        prevPage: 'Aurrekoa',
        nextPage: 'Hurrengoa',
        zoomIn: 'Handitu',
        zoomOut: 'Txikitu',
        fitWidth: 'Zabalera doitu',
        pageLabel: '{current} / {total} orria',
        missingPdfEngine: 'Ezin izan da PDF bisorea kargatu.',
        loadingDocx: 'DOCX kargatzen...',
        failedDocx: 'Ezin izan da DOCX hau bistaratu.',
        downloadDocx: 'DOCX deskargatu',
        missingDocxEngine: 'Ezin izan da DOCX bisorea kargatu.'
      },
      folderViewer: {
        title: 'Karpeta modua',
        subtitle: 'Arakatu karpetak eta azpikarpetak fitxategi motaren araberako ikonoekin.',
        searchPlaceholder: 'Bilatu fitxategiak...',
        searchResults: 'Bilaketaren emaitzak',
        selectAll: 'Ikusgai daudenak hautatu',
        clearSelection: 'Hautapena garbitu',
        openSelected: 'Hautatutakoak ireki',
        downloadAll: 'Deskargatu dena',
        downloadSelected: 'Hautapena deskargatu',
        downloadVisible: 'Ikusgai dagoen zerrenda deskargatu',
        noResults: 'Ez dago erakusteko fitxategirik.',
        selectedCount: '{count} hautatuta',
        openFile: 'Ireki',
        downloadFile: 'Deskargatu',
        contextOpen: 'Ireki',
        contextDownload: 'Deskargatu',
        contextDownloadVisible: 'Ikusgai dagoen zerrenda deskargatu',
        folder: 'Karpeta',
        filesWord: 'fitxategi'
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
        theme: 'Theme',
        themeHint: 'Change theme',
        themeAuto: 'Auto',
        themeLight: 'Light',
        themeDark: 'Dark',
        subtitle: 'Self-publishing of educational resources in web (HTML) or in PDF and/or DOCX from your cloud storage.'
      },
      settings: {
        title: 'Visibility settings',
        languageTitle: 'Language',
        restrictTitle: 'Date access',
        restrictHint: 'Here you can define when the resource will be visible and which actions will be available in the resource manager.',
        restrictToggle: 'Limit access',
        startLabel: 'Start',
        endLabel: 'End',
        neverExpires: 'Access with end date',
        enforceEndDuringView: 'Disable viewing when end date is reached, even if it is already open',
        warningMinutesLabel: 'Warn before in minutes (0 for no warning)',
        warningMessageLabel: 'Warning message',
        warningMessagePlaceholder: 'Access time will end in {minutes} minutes.',
        warningMessageDefault: 'Access time will end in {minutes} minutes.',
        periodHint: 'The resource will only be visible within this time range.',
        periodHintLiveEndOn: 'Viewing will be disabled when the end date is reached.',
        periodHintLiveEndOff: 'Viewing will not be automatically disabled when the end date is reached.',
        periodHintWarningOn: 'A warning will appear {minutes} minutes earlier.',
        periodHintWarningOff: 'There will be no prior warning.',
        summaryLiveEndOn: 'Disables at end time',
        summaryLiveEndOff: 'No auto-disable',
        summaryWarningOn: 'Warning: {minutes} min before',
        summaryWarningOff: 'No prior warning',
        summaryNoRestrictions: 'Resource without visibility restrictions.',
        summaryAllowedActions: 'Resource manager actions: {actions}',
        summaryNoActions: 'none',
        summaryBlockedActions: 'Will not be allowed: {actions}',
        summaryNoBlockedActions: 'none',
        actionsTitle: 'Actions available while the resource is accessible',
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
        choice: {
          zipper: {
            title: 'Create a ZIP (web, PDF, or DOCX)',
            note: 'Create a ZIP from local files or from HTML. It can also include PDF and DOCX files.',
            restrictHint: 'You can also apply date-based access limits.'
          },
          main: {
            title: 'I already have a ZIP in the cloud with link',
            note: 'Paste the public link (ZIP/ELPX) and create the viewer link.',
            secondaryHtml: 'If you use an eXeLearning .elpx, you can open it here too <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="What is ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">An .elpx file is an eXeLearning project that internally uses the ZIP format, which allows the viewer to access its content and display it correctly.</span></span>',
            elpxTooltip: 'What is ELPX?',
            elpxTooltipHtml: 'An .elpx file is an eXeLearning project that internally uses the ZIP format, which allows the viewer to access its content and display it correctly.'
          }
        }
      },
      tabs: {
        label: 'Sections'
      },
      main: {
        subtitle: 'If your resource is already in ZIP or .elpx format and hosted on a service with a <strong>public link</strong> (Drive, Dropbox, etc.), paste the link here to generate the viewer link.',
        form: {
          title: 'I already have a ZIP in the cloud with link',
          step: 'Paste the public ZIP link (or .elpx) and click “Create link”.',
          placeholder: 'Paste the public ZIP or .elpx link here (also valid if it includes PDF or DOCX)',
          submit: 'Create link'
        },
        output: {
          title: 'Shareable link',
          step: '',
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
        checkUpdates: 'Check updates',
        checkUpdatesHelp: 'Check whether ZIPs changed in the cloud.',
        checkUpdatesModalTitle: 'Check updates',
        checkingUpdates: 'Checking updates...',
        checkUpdatesNote: 'You can close this window. The check will continue in the background.',
        checkUpdatesProgress: '{done} of {total}',
        checkUpdatesDoneSummary: 'Updates: {changed} of {total}.',
        checkUpdatesNone: 'No saved resources.',
        checkUpdatesDone: 'Check complete.',
        checkUpdatesUnavailable: 'Cannot check without the backend configured.',
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
          download: 'Download file',
          update: 'Update',
          updating: 'Updating...',
          updated: 'Updated'
        },
        editPrompt: 'Resource title',
        empty: 'No saved resources in this browser.',
        siteNoUrl: 'Site without URL',
        noDate: 'no date'
      },
      badges: {
        scheduled: 'Scheduled',
        opening: 'Start: {date}',
        closing: 'End: {date}',
        updateAvailable: 'Update available',
        updatedAt: 'Updated: {date}'
      },
      updates: {
        title: 'New version available',
        body: 'This resource changed in the cloud. You can update it now.',
        action: 'Update',
        dismiss: 'Not now'
      },
      zipper: {
        title: 'Create ZIP for the viewer',
        accordion: {
          filesTitle: 'Does your resource have one or more files? Create a ZIP here'
        },
        subtitle: {
          item1: 'To publish your resource, put all files in a folder and compress it into a <strong>.zip</strong> file. It can contain web pages and/or one or more <strong>PDF</strong> files.',
          item2: 'If your resource was made with <strong>eXeLearning 3 or later</strong>, you can use the <strong>.elpx</strong> file directly.',
          item3: 'If you use <strong>eXeLearning 2.x</strong>, export the project to <strong>ZIP</strong> from the program and continue with <strong>“I already have a ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: in version 3+ you can use a .elpx directly (it’s already a ZIP). Version 2.x: File > Export > Website > Compressed ZIP file. Version 3.x: File > Download as > Website.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Version 3+: you can use the <code>.elpx</code> file directly (it’s already a ZIP).<br>• Version 2.x: File &gt; Export &gt; Website &gt; Compressed ZIP file.<br>• Version 3.x: File &gt; Download as &gt; Website.'
        },
        step1: {
          title: 'Add your files',
          note: 'Drag the folder or select files using the buttons.'
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
          detail: 'When you create the ZIP, a file will download that you can upload to Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Force folder viewer',
          forceFolderNote: 'If you enable this option, the ZIP will open in file explorer mode: you will see content as files organized in folders, even when it includes HTML or documents.',
          forceFolderTooltip: 'More information',
          forceFolderTooltipHtml: 'If you enable this option, the ZIP will open in file explorer mode: you will see content as files organized in folders, even when it includes HTML or documents.<br><br>If you do not enable it, the app will automatically detect which viewer type to use.<br><br>If you are not sure, leave it unchecked.'
        },
        zipName: {
          label: 'ZIP name',
          placeholder: 'my_resource',
          default: 'my_resource'
        },
        resourceTitle: {
          label: 'Resource title',
          placeholder: 'My resource',
          toggleLabel: 'Set a title for the resource (current title: {title})',
          currentEmpty: 'no title'
        },
        build: 'Create and download ZIP',
        html: {
          title: 'No files but you have the HTML code? Paste it here',
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
          title: 'Do you already have a ZIP or ELPX and want to add visibility restrictions? Upload it here',
          note: 'Upload your ZIP and the viewer will add restrictions. Then upload it to Drive, Dropbox, etc.',
          lockedText: 'To use this option, first enable the resource visibility limit.',
          lockedAction: 'Enable limit',
          lockedStatus: '',
          pick: 'Select ZIP',
          apply: 'Apply restrictions and download',
          status: {
            ready: '',
            working: 'Applying restrictions...',
            done: 'ZIP ready with restrictions.',
            failed: 'Could not modify the ZIP. Check the file.'
          },
          
          summaryTitle: 'Access limited by dates'
        },
        help: {
          inline: 'If you already created a ZIP file and shared it on a service with a public link, go to: “I already have a ZIP in the cloud with link”.',
          previewTitle: 'Preview the resource before downloading it (optional)',
          nextStepText: 'The next step is to upload and share the ZIP or ELPX file with a public link. Once you have it, click “Continue”.',
          previewAction: 'Preview',
          previewApplyRestrictions: 'Apply restrictions in preview',
          previewApplyRestrictionsNote: 'Enable it to check how the resource opens and closes based on the configured dates.',
          previewApplyRestrictionsInfo: 'More information',
          previewApplyRestrictionsInfoHtml: 'Use it to check how the resource opens and closes based on the configured dates.',
          goTab: 'Next: “I already have a ZIP in the cloud with link”'
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
        body: '<nav class="about-index" data-help-nav aria-label="Help index"><p class="about-index__title">Index</p><ul><li><a href="#help-goal">Goal</a></li><li><a href="#help-steps">How to share in 3 steps</a></li><li><a href="#help-options">Ways to start</a></li><li><a href="#help-viewer">Which viewer is created</a></li><li><a href="#help-before">Before sharing</a></li><li><a href="#help-visibility">Visibility limits</a></li><li><a href="#help-manager">Resource manager</a></li><li><a href="#help-faq">FAQ: privacy and data</a></li></ul></nav><section aria-labelledby="help-goal"><h3 class="about-section-title" id="help-goal" tabindex="-1">Goal</h3><p>Share your teaching materials with students through a link, quickly and simply.</p></section><section aria-labelledby="help-steps"><h3 class="about-section-title" id="help-steps" tabindex="-1">How to share in 3 steps</h3><ol class="about-steps"><li>Prepare your resource as a ZIP file (if you do not have one, the app creates it for you).</li><li>Upload that ZIP to your cloud storage (Drive, Dropbox, Nextcloud, etc.) and get a public link.</li><li>Paste the link in the viewer and click <strong>Create link</strong>.</li></ol><p>Done: the app gives you the final link, and that is the one you share with students.</p></section><section aria-labelledby="help-options"><h3 class="about-section-title" id="help-options" tabindex="-1">Ways to start</h3><p><strong>A) Create ZIP from files</strong>. If you already have a ZIP, go to option C.</p><ul><li>If your files are on your computer, use this option.</li><li>Add a folder or files and click <strong>Create and download ZIP</strong>.</li><li>Then upload that ZIP to your cloud and share it as in option C.</li></ul><p><strong>B) Paste HTML</strong></p><ul><li>If you do not have a ZIP but you have HTML code, paste it and create the ZIP automatically.</li></ul><p><strong>C) I already have a ZIP/ELPX in the cloud with a public link</strong></p><ul><li>Paste the public ZIP or ELPX link and create the viewer link.</li></ul></section><section aria-labelledby="help-viewer"><h3 class="about-section-title" id="help-viewer" tabindex="-1">Which viewer is created</h3><p>Depending on the content, the system opens automatically:</p><ul><li><strong>Web viewer</strong> (HTML pages): your resource opens as a website.</li><li><strong>Document viewer</strong> (PDF and DOCX): your resources open as documents.</li><li><strong>Folder viewer</strong>: any file type appears organized in folders.</li></ul></section><section aria-labelledby="help-before"><h3 class="about-section-title" id="help-before" tabindex="-1">Before sharing</h3><ul><li>Use <strong>Preview</strong> to check that everything opens correctly.</li><li>Verify that your cloud link is public.</li></ul><p><strong>Practical tip</strong>: if you update a resource, replace the original cloud file with the new one and the app will detect the change automatically.</p></section><section aria-labelledby="help-visibility"><h3 class="about-section-title" id="help-visibility" tabindex="-1">Visibility limits (optional)</h3><p>You can choose when a resource can be opened from <strong>Options</strong>:</p><ul><li>Enable availability configuration.</li><li>Set start date and time.</li><li>If needed, add end date and time.</li><li>Set which manager actions are allowed during access (share, embed, download).</li></ul><p>Useful for scheduling resources by day, week, or assessment period.</p></section><section aria-labelledby="help-manager"><h3 class="about-section-title" id="help-manager" tabindex="-1">Resource manager</h3><p>In the Manager you will see resources created and opened in this browser. From there you can open, copy link, embed, update, and delete.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privacy and data</h3><ul><li><strong>Where are resources stored?</strong> In each device browser local storage.</li><li><strong>Are my resources uploaded to GitHub or this app?</strong> No. You host the ZIP in your cloud storage. The viewer only downloads and opens it in the browser.</li><li><strong>Is data sent to third parties?</strong> No. Only the ZIP download from the public link you provided.</li><li><strong>What happens if I clear browser data or switch device?</strong> Local resources disappear in that browser/device.</li><li><strong>Who can view the resource?</strong> Anyone with the viewer link and access to the public ZIP link.</li><li><strong>How do I update a resource?</strong> Replace the ZIP in the cloud keeping the same link and use <strong>Update</strong> in the manager.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'The file is too large and Google Drive limits downloads. Try Nextcloud, Dropbox, or another service.',
        loadZip: 'Could not load the ZIP.',
        restricted: 'This resource is no longer available due to date restrictions.',
        embedNotAllowed: 'Embedding is not allowed for this resource.',
        popupBlocked: 'The browser blocked the preview window. Allow pop-ups for this site and try again.',
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
      documentViewer: {
        documentsTitle: 'Documents',
        hideList: 'Hide list',
        showList: 'Show list',
        loadingPdf: 'Loading PDF...',
        failedPdf: 'Could not display this PDF.',
        downloadPdf: 'Download PDF',
        prevPage: 'Previous',
        nextPage: 'Next',
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
        fitWidth: 'Fit to width',
        pageLabel: 'Page {current} / {total}',
        missingPdfEngine: 'Could not load the PDF viewer.',
        loadingDocx: 'Loading DOCX...',
        failedDocx: 'Could not display this DOCX.',
        downloadDocx: 'Download DOCX',
        missingDocxEngine: 'Could not load the DOCX viewer.'
      },
      folderViewer: {
        title: 'Folder mode',
        subtitle: 'Browse folders and subfolders with icons by file type.',
        searchPlaceholder: 'Search files...',
        searchResults: 'Search results',
        selectAll: 'Select visible',
        clearSelection: 'Clear selection',
        openSelected: 'Open selected',
        downloadAll: 'Download all',
        downloadSelected: 'Download selection',
        downloadVisible: 'Download visible list',
        noResults: 'No files to show.',
        selectedCount: '{count} selected',
        openFile: 'Open',
        downloadFile: 'Download',
        contextOpen: 'Open',
        contextDownload: 'Download',
        contextDownloadVisible: 'Download visible list',
        folder: 'Folder',
        filesWord: 'files'
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
        theme: 'Design',
        themeHint: 'Design ändern',
        themeAuto: 'Automatisch',
        themeLight: 'Hell',
        themeDark: 'Dunkel',
        subtitle: 'Selbstveröffentlichung von Bildungsressourcen als Web (HTML) oder als PDF und/oder DOCX aus deinem Cloud-Speicher.'
      },
      settings: {
        title: 'Sichtbarkeitseinstellungen',
        languageTitle: 'Sprache',
        restrictTitle: 'Zugriff nach Datum',
        restrictHint: 'Hier kannst du festlegen, wann die Ressource sichtbar ist und welche Aktionen im Ressourcenmanager verfügbar sind.',
        restrictToggle: 'Zugriff begrenzen',
        startLabel: 'Start',
        endLabel: 'Ende',
        neverExpires: 'Zugriff mit Enddatum',
        enforceEndDuringView: 'Anzeige beim Erreichen des Enddatums deaktivieren, auch wenn bereits geöffnet',
        warningMinutesLabel: 'Vorwarnung in Minuten (0 fuer keine Warnung)',
        warningMessageLabel: 'Warnhinweis',
        warningMessagePlaceholder: 'Die Zugriffszeit endet in {minutes} Minuten.',
        warningMessageDefault: 'Die Zugriffszeit endet in {minutes} Minuten.',
        periodHint: 'Die Ressource ist nur innerhalb dieses Zeitraums sichtbar.',
        periodHintLiveEndOn: 'Die Anzeige wird beim Erreichen des Enddatums deaktiviert.',
        periodHintLiveEndOff: 'Die Anzeige wird beim Erreichen des Enddatums nicht automatisch deaktiviert.',
        periodHintWarningOn: 'Es gibt {minutes} Minuten vorher eine Warnung.',
        periodHintWarningOff: 'Es gibt keine vorherige Warnung.',
        summaryLiveEndOn: 'Deaktiviert bei Endzeit',
        summaryLiveEndOff: 'Keine automatische Deaktivierung',
        summaryWarningOn: 'Warnung: {minutes} Min vorher',
        summaryWarningOff: 'Keine Vorwarnung',
        summaryNoRestrictions: 'Ressource ohne Sichtbarkeitsbeschraenkungen.',
        summaryAllowedActions: 'Aktionen des Ressourcenmanagers: {actions}',
        summaryNoActions: 'keine',
        summaryBlockedActions: 'Nicht erlaubt: {actions}',
        summaryNoBlockedActions: 'keine',
        actionsTitle: 'Aktionen, solange die Ressource zugänglich ist',
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
        choice: {
          zipper: {
            title: 'ZIP erstellen (Web, PDF oder DOCX)',
            note: 'Erstelle ein ZIP aus lokalen Dateien oder aus HTML. Es kann auch PDF und DOCX enthalten.',
            restrictHint: 'Du kannst den Zugriff auch zeitlich begrenzen.'
          },
          main: {
            title: 'Ich habe bereits eine ZIP-Datei in der Cloud mit Link',
            note: 'Füge den öffentlichen Link (ZIP/ELPX) ein und erstelle den Viewer-Link.',
            secondaryHtml: 'Wenn du eine eXeLearning-.elpx nutzt, kannst du sie hier ebenfalls öffnen <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Was ist ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Eine .elpx-Datei ist ein eXeLearning-Projekt, das intern das ZIP-Format verwendet. Dadurch kann der Viewer auf den Inhalt zugreifen und ihn korrekt anzeigen.</span></span>',
            elpxTooltip: 'Was ist ELPX?',
            elpxTooltipHtml: 'Eine .elpx-Datei ist ein eXeLearning-Projekt, das intern das ZIP-Format verwendet. Dadurch kann der Viewer auf den Inhalt zugreifen und ihn korrekt anzeigen.'
          }
        }
      },
      tabs: {
        label: 'Abschnitte'
      },
      main: {
        subtitle: 'Wenn deine Ressource bereits im ZIP- oder .elpx-Format mit <strong>öffentlichem Link</strong> verfügbar ist (Drive, Dropbox usw.), füge den Link hier ein, um den Viewer-Link zu erzeugen.',
        form: {
          title: 'Ich habe bereits eine ZIP-Datei in der Cloud mit Link',
          step: 'Füge den öffentlichen Link zur ZIP-Datei (oder .elpx) ein und klicke auf „Link erstellen“.',
          placeholder: 'Füge hier den öffentlichen ZIP- oder .elpx-Link ein (auch gültig, wenn PDF oder DOCX enthalten ist)',
          submit: 'Link erstellen'
        },
        output: {
          title: 'Link zum Teilen',
          step: '',
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
        checkUpdates: 'Updates prüfen',
        checkUpdatesHelp: 'Prüft, ob sich ZIPs in der Cloud geändert haben.',
        checkUpdatesModalTitle: 'Updates prüfen',
        checkingUpdates: 'Updates werden geprüft...',
        checkUpdatesNote: 'Du kannst dieses Fenster schließen. Die Prüfung läuft im Hintergrund weiter.',
        checkUpdatesProgress: '{done} von {total}',
        checkUpdatesDoneSummary: 'Updates: {changed} von {total}.',
        checkUpdatesNone: 'Keine gespeicherten Ressourcen.',
        checkUpdatesDone: 'Prüfung abgeschlossen.',
        checkUpdatesUnavailable: 'Prüfung ohne Backend nicht möglich.',
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
          download: 'Datei herunterladen',
          update: 'Aktualisieren',
          updating: 'Wird aktualisiert...',
          updated: 'Aktualisiert'
        },
        editPrompt: 'Titel der Ressource',
        empty: 'Keine gespeicherten Ressourcen in diesem Browser.',
        siteNoUrl: 'Website ohne URL',
        noDate: 'ohne Datum'
      },
      badges: {
        scheduled: 'Geplant',
        opening: 'Beginn: {date}',
        closing: 'Ende: {date}',
        updateAvailable: 'Update verfügbar',
        updatedAt: 'Aktualisiert: {date}'
      },
      updates: {
        title: 'Neue Version verfügbar',
        body: 'Diese Ressource hat sich in der Cloud geändert. Du kannst jetzt aktualisieren.',
        action: 'Aktualisieren',
        dismiss: 'Jetzt nicht'
      },
      zipper: {
        title: 'ZIP für den Viewer erstellen',
        accordion: {
          filesTitle: 'Hat deine Ressource eine oder mehrere Dateien? Erstelle hier eine ZIP-Datei'
        },
        subtitle: {
          item1: 'Um deine Ressource zu veröffentlichen, lege alle Dateien in einen Ordner und komprimiere ihn zu einer <strong>.zip</strong>-Datei. Sie kann Webseiten und/oder eine oder mehrere <strong>PDF</strong>-Dateien enthalten.',
          item2: 'Wenn deine Ressource mit <strong>eXeLearning 3 oder höher</strong> erstellt wurde, kannst du die <strong>.elpx</strong>-Datei direkt verwenden.',
          item3: 'Wenn du <strong>eXeLearning 2.x</strong> nutzt, exportiere das Projekt als <strong>ZIP</strong> aus dem Programm und fahre mit der Option <strong>„Ich habe bereits ein ZIP“</strong> fort.'
        },
        exe: {
          tooltip: 'eXeLearning: In Version 3+ kannst du eine .elpx direkt verwenden (sie ist bereits ein ZIP). Version 2.x: Datei > Exportieren > Website > Komprimierte ZIP-Datei. Version 3.x: Datei > Herunterladen als > Website.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Version 3+: Du kannst die <code>.elpx</code>-Datei direkt verwenden (sie ist bereits ein ZIP).<br>• Version 2.x: Datei &gt; Exportieren &gt; Website &gt; Komprimierte ZIP-Datei.<br>• Version 3.x: Datei &gt; Herunterladen als &gt; Website.'
        },
        step1: {
          title: 'Dateien hinzufügen',
          note: 'Ziehe den Ordner hierher oder wähle Dateien per Button.'
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
          detail: 'Beim Erstellen des ZIP wird eine Datei heruntergeladen, die du bei Drive, Dropbox, Nextcloud usw. hochladen kannst.',
          forceFolderLabel: 'Ordneransicht erzwingen',
          forceFolderNote: 'Wenn du diese Option aktivierst, wird das ZIP im Datei-Explorer-Modus geöffnet: Der Inhalt wird als in Ordnern organisierte Dateien angezeigt, auch wenn HTML oder Dokumente enthalten sind.',
          forceFolderTooltip: 'Mehr Informationen',
          forceFolderTooltipHtml: 'Wenn du diese Option aktivierst, wird das ZIP im Datei-Explorer-Modus geöffnet: Der Inhalt wird als in Ordnern organisierte Dateien angezeigt, auch wenn HTML oder Dokumente enthalten sind.<br><br>Wenn du es nicht aktivierst, erkennt das Programm automatisch, welcher Viewertyp verwendet werden soll.<br><br>Wenn du dir nicht sicher bist, aktiviere es nicht.'
        },
        zipName: {
          label: 'ZIP-Name',
          placeholder: 'mein_ressource',
          default: 'mein_ressource'
        },
        resourceTitle: {
          label: 'Titel der Ressource',
          placeholder: 'Meine Ressource',
          toggleLabel: 'Titel fuer die Ressource festlegen (aktueller Titel: {title})',
          currentEmpty: 'kein Titel'
        },
        build: 'ZIP erstellen und herunterladen',
        html: {
          title: 'Keine Dateien, aber HTML-Code? Hier einfügen',
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
          title: 'Hast du bereits eine ZIP- oder ELPX-Datei und möchtest Sichtbarkeitsbeschränkungen hinzufügen? Lade sie hier hoch',
          note: 'Lade dein ZIP hoch und der Viewer fügt die Einschränkungen hinzu. Danach musst du es zu Drive, Dropbox usw. hochladen.',
          lockedText: 'Um diese Option zu nutzen, aktiviere zuerst die Sichtbarkeitsbegrenzung der Ressource.',
          lockedAction: 'Begrenzung aktivieren',
          lockedStatus: '',
          pick: 'ZIP auswählen',
          apply: 'Einschränkungen anwenden und herunterladen',
          status: {
            ready: '',
            working: 'Einschränkungen werden angewendet...',
            done: 'ZIP ist mit Einschränkungen bereit.',
            failed: 'ZIP konnte nicht geändert werden. Prüfe die Datei.'
          },
          
          summaryTitle: 'Zugriff zeitlich begrenzt'
        },
        help: {
          inline: 'Wenn du bereits eine ZIP-Datei erstellt und sie über einen Dienst mit öffentlichem Link geteilt hast, gehe zu: „Ich habe bereits eine ZIP-Datei in der Cloud mit Link“.',
          previewTitle: 'Ressource vor dem Herunterladen vorab ansehen (optional)',
          nextStepText: 'Der nächste Schritt ist, die ZIP- oder ELPX-Datei mit öffentlichem Link hochzuladen und zu teilen. Sobald du sie hast, klicke auf „Weiter“.',
          previewAction: 'Vorschau',
          previewApplyRestrictions: 'Einschränkungen in der Vorschau anwenden',
          previewApplyRestrictionsNote: 'Aktiviere dies, um zu prüfen, wie sich die Ressource gemäß den eingestellten Daten öffnet und schließt.',
          previewApplyRestrictionsInfo: 'Mehr Informationen',
          previewApplyRestrictionsInfoHtml: 'Damit kannst du prüfen, wie sich die Ressource gemäß den eingestellten Daten öffnet und schließt.',
          goTab: 'Weiter: „Ich habe bereits eine ZIP-Datei in der Cloud mit Link“'
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
        body: '<nav class="about-index" data-help-nav aria-label="Hilfe-Inhalt"><p class="about-index__title">Inhalt</p><ul><li><a href="#help-ziel">Ziel</a></li><li><a href="#help-schritte">Teilen in 3 Schritten</a></li><li><a href="#help-start">So startest du</a></li><li><a href="#help-viewer">Welcher Viewer erstellt wird</a></li><li><a href="#help-vorher">Vor dem Teilen</a></li><li><a href="#help-sichtbarkeit">Sichtbarkeitsbegrenzung</a></li><li><a href="#help-manager">Ressourcenverwaltung</a></li><li><a href="#help-faq">FAQ: Datenschutz und Daten</a></li></ul></nav><section aria-labelledby="help-ziel"><h3 class="about-section-title" id="help-ziel" tabindex="-1">Ziel</h3><p>Teile deine Materialien mit Lernenden per Link, einfach und schnell.</p></section><section aria-labelledby="help-schritte"><h3 class="about-section-title" id="help-schritte" tabindex="-1">Teilen in 3 Schritten</h3><ol class="about-steps"><li>Bereite deine Ressource als ZIP-Datei vor (wenn du keine hast, erstellt das Programm sie für dich).</li><li>Lade diese ZIP in deine Cloud hoch (Drive, Dropbox, Nextcloud usw.) und erhalte einen öffentlichen Link.</li><li>Füge den Link im Viewer ein und klicke auf <strong>Link erstellen</strong>.</li></ol><p>Fertig: Das Programm gibt dir den finalen Link, und genau diesen teilst du mit den Lernenden.</p></section><section aria-labelledby="help-start"><h3 class="about-section-title" id="help-start" tabindex="-1">So startest du</h3><p><strong>A) ZIP aus Dateien erstellen</strong>. Wenn du bereits eine ZIP hast, gehe zu Option C.</p><ul><li>Wenn sich die Dateien auf deinem Computer befinden, nutze diese Option.</li><li>Ordner oder Dateien hinzufügen und auf <strong>ZIP erstellen und herunterladen</strong> klicken.</li><li>Danach die ZIP in die Cloud hochladen und wie in Option C teilen.</li></ul><p><strong>B) HTML einfügen</strong></p><ul><li>Wenn du keine ZIP hast, aber HTML-Code, füge ihn ein und erstelle die ZIP automatisch.</li></ul><p><strong>C) Ich habe bereits eine ZIP/ELPX in der Cloud mit öffentlichem Link</strong></p><ul><li>Öffentlichen ZIP- oder ELPX-Link einfügen und den Viewer-Link erstellen.</li></ul></section><section aria-labelledby="help-viewer"><h3 class="about-section-title" id="help-viewer" tabindex="-1">Welcher Viewer erstellt wird</h3><p>Je nach Inhalt öffnet das System automatisch:</p><ul><li><strong>Web-Viewer</strong> (HTML-Seiten): die Ressource wird als Webseite angezeigt.</li><li><strong>Dokumenten-Viewer</strong> (PDF und DOCX): die Ressourcen werden als Dokumente angezeigt.</li><li><strong>Ordner-Viewer</strong>: jeder Dateityp wird in Ordnern organisiert angezeigt.</li></ul></section><section aria-labelledby="help-vorher"><h3 class="about-section-title" id="help-vorher" tabindex="-1">Vor dem Teilen</h3><ul><li>Nutze <strong>Vorschau</strong>, um zu prüfen, ob alles korrekt angezeigt wird.</li><li>Prüfe, ob dein Cloud-Link öffentlich ist.</li></ul><p><strong>Praktischer Tipp</strong>: Wenn du eine Ressource aktualisierst, ersetze die Originaldatei in der Cloud durch die neue Datei. Das Programm erkennt die Änderung automatisch.</p></section><section aria-labelledby="help-sichtbarkeit"><h3 class="about-section-title" id="help-sichtbarkeit" tabindex="-1">Sichtbarkeitsbegrenzung (optional)</h3><p>In <strong>Optionen</strong> kannst du festlegen, wann eine Ressource geöffnet werden darf:</p><ul><li>Aktiviere die Verfügbarkeitskonfiguration.</li><li>Lege Startdatum und Startzeit fest.</li><li>Optional Enddatum und Endzeit ergänzen.</li><li>Lege fest, welche Aktionen im Manager während des Zugriffs erlaubt sind (teilen, einbetten, herunterladen).</li></ul><p>Nützlich, um Ressourcen nach Tagen, Wochen oder Bewertungszeiträumen zu planen.</p></section><section aria-labelledby="help-manager"><h3 class="about-section-title" id="help-manager" tabindex="-1">Ressourcenverwaltung</h3><p>In der Verwaltung siehst du Ressourcen, die in diesem Browser erstellt und geöffnet wurden. Von dort kannst du öffnen, Link kopieren, einbetten, aktualisieren und löschen.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: Datenschutz und Daten</h3><ul><li><strong>Wo werden Ressourcen gespeichert?</strong> Im lokalen Browser-Speicher jedes Geräts.</li><li><strong>Werden meine Ressourcen auf GitHub oder in dieses Programm hochgeladen?</strong> Nein. Du hostest die ZIP in deiner Cloud. Der Viewer lädt sie nur herunter und öffnet sie im Browser.</li><li><strong>Werden Daten an Dritte gesendet?</strong> Nein. Nur der ZIP-Download über den von dir angegebenen öffentlichen Link.</li><li><strong>Was passiert, wenn ich Browserdaten lösche oder das Gerät wechsle?</strong> Lokale Ressourcen verschwinden in diesem Browser/Gerät.</li><li><strong>Wer kann die Ressource sehen?</strong> Wer den Viewer-Link und Zugriff auf den öffentlichen ZIP-Link hat.</li><li><strong>Wie aktualisiere ich eine Ressource?</strong> ZIP in der Cloud bei gleichem Link ersetzen und im Manager <strong>Aktualisieren</strong> verwenden.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'Die Datei ist zu groß und Google Drive begrenzt Downloads. Versuche es mit Nextcloud, Dropbox oder einem anderen Dienst.',
        loadZip: 'ZIP konnte nicht geladen werden.',
        restricted: 'Diese Ressource ist aufgrund der Datumsbeschränkung nicht mehr verfügbar.',
        embedNotAllowed: 'Einbetten ist für diese Ressource nicht erlaubt.',
        popupBlocked: 'Der Browser hat das Vorschaufenster blockiert. Erlaube Pop-ups für diese Website und versuche es erneut.',
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
      documentViewer: {
        documentsTitle: 'Dokumente',
        hideList: 'Liste ausblenden',
        showList: 'Liste anzeigen',
        loadingPdf: 'PDF wird geladen...',
        failedPdf: 'Dieses PDF konnte nicht angezeigt werden.',
        downloadPdf: 'PDF herunterladen',
        prevPage: 'Zurück',
        nextPage: 'Weiter',
        zoomIn: 'Vergrößern',
        zoomOut: 'Verkleinern',
        fitWidth: 'Auf Breite anpassen',
        pageLabel: 'Seite {current} / {total}',
        missingPdfEngine: 'PDF-Viewer konnte nicht geladen werden.',
        loadingDocx: 'DOCX wird geladen...',
        failedDocx: 'Dieses DOCX konnte nicht angezeigt werden.',
        downloadDocx: 'DOCX herunterladen',
        missingDocxEngine: 'DOCX-Viewer konnte nicht geladen werden.'
      },
      folderViewer: {
        title: 'Ordnermodus',
        subtitle: 'Durchsuche Ordner und Unterordner mit Symbolen nach Dateityp.',
        searchPlaceholder: 'Dateien suchen...',
        searchResults: 'Suchergebnisse',
        selectAll: 'Sichtbare auswählen',
        clearSelection: 'Auswahl löschen',
        openSelected: 'Auswahl öffnen',
        downloadAll: 'Alles herunterladen',
        downloadSelected: 'Auswahl herunterladen',
        downloadVisible: 'Sichtbare Liste herunterladen',
        noResults: 'Keine Dateien zum Anzeigen.',
        selectedCount: '{count} ausgewählt',
        openFile: 'Öffnen',
        downloadFile: 'Herunterladen',
        contextOpen: 'Öffnen',
        contextDownload: 'Herunterladen',
        contextDownloadVisible: 'Sichtbare Liste herunterladen',
        folder: 'Ordner',
        filesWord: 'Dateien'
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
