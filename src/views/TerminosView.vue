<template>
  <div class="terminos-view">
    <div class="container px-sm-0 px-5 py-5">
      <div class="row mb-5">
        <div class="col">
          <h1>Términos y condiciones</h1>
          <h5>Actualización de 13 de Noviembre de 2022</h5>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <h5>Tabla de contenido</h5>
          <ul class="content-list">
            <li v-for="(item, index) in content" :key="title">
              <span>{{ `${index + 1}. ` }}</span>
              <a :href="`#${item.goto}`">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- DEFINICIONES ------------ -->
      <div class="row scroll-margin mb-5" id="definiciones">
        <div class="col">
          <h3>1. Definiciones</h3>
          <ul class="list-info">
            <li>
              <b>1.1 Contenido:</b> Todo el software, bases de datos, códigos,
              desarrollo, hardware, materiales, información, comunicación,
              textos, gráficos, enlaces, funcionalidades, dominios, arte
              electrónico, animaciones, audio, video, fotos, marcas, patentes,
              logos, nombres comerciales, etc., disponibles en la Plataforma.
            </li>
            <li>
              <b>1.2 LFM:</b> La empresa HKRE S. de R.L. de C.V., conocida
              comercialmente como “Land Finder México”, cuyo objeto comprende,
              entre otros, el diseñar, desarrollar, programar operar y/o
              comercializar toda clase de programas informáticos y/o
              aplicaciones digitales.
            </li>
            <li>
              <b>1.3 Plataforma:</b> Sitio web
              <a href="https://landfindermexico.com" class="link"
                >https://landfindermexico.com</a
              >
              , subdominios y todas las páginas webs o aplicaciones móviles
              existentes o que se creen en el futuro, cuyo titular sea LFM o
              cualquiera de sus filiales o subsidiarias.
            </li>
            <li>
              <b>1.4 Registro:</b> Formulario proporcionado por LFM y entrega de
              documentos (PDF), solicitados.
            </li>
            <li>
              <b>1.5 Servicios:</b> Analizar y publicar inmuebles en la
              Plataforma (como un Software as a Service), a fin de fungir como
              intermediario entre propietarios y fondos de inversión,
              inversionistas particulades, desarrolladores y cualquier otra
              persona interesada en realizar y/o fondear proyectos inmobiliarios
              en asociación con los propietarios de los inmuebles.
            </li>
            <li>
              <b>1.6 Sitio: </b>
              <a href="https://landfindermexico.com" class="link"
                >https://landfindermexico.com</a
              >, dominio en el cual se encuentra hospedada la Plataforma.
            </li>
            <li>
              <b>1.7 Términos y Condiciones:</b> La integridad del presente
              documento, el cual constituye el contrato que regula el uso de los
              Servicios ofrecidos por LFM a través de la Plataforma.
            </li>
            <li>
              <b>1.8 Usuario:</b> Persona física que por sí misma o en
              representación de una tercera (física o moral), acceda a la
              Plataforma y/o utilice los Servicios prestados por LFM a través de
              ésta.
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- GENERALES ------------ -->
      <div class="row scroll-margin mb-5" id="generales">
        <div class="col">
          <h3>2. Generales</h3>
          <p>
            Para todos los efectos legales, se entiende que el Usuario ha leído
            y acepta sin limitación ni condición alguna los presentes Términos y
            Condiciones, al acceder, navegar y utilizar la Plataforma, sus
            herramientas, componentes, funciones o servicios, registrarse en la
            misma o consultar cualquier texto, gráfico o video mediante
            cualquier equipo tecnológico (computadora, teléfono móvil, tableta o
            cualquier otro similar).
          </p>
          <ul class="list-info">
            <li>
              <b>2.1: </b> Si el Usuario no está de acuerdo con estos Términos y
              Condiciones deberá abstenerse de acceder la Plataforma y utilizar
              los Servicios prestados por LFM, en el entendido de que dicha
              abstención no implica la liberación de obligaciones previamente
              adquiridas de conformidad con lo dispuesto en los presentes
              Términos y Condiciones.
            </li>
            <li>
              <b>2.2: </b> Los presentes Términos y Condiciones se encontrarán,
              de manera permanente, a disposición del Usuario en la Plataforma.
            </li>
            <li>
              <b>2.3: </b> LFM se reserva el derecho de modificar o sustituir
              los presentes Términos y Condiciones, así como de incorporar
              términos y condiciones adicionales, en cualquier momento y sin
              previo aviso, mediante la publicación de los términos y
              condiciones modificados, sustituidos o adicionados en Plataforma.
            </li>
            <li>
              <b>2.4: </b> El uso y/o acceso del Usuario a la Plataforma con
              posterioridad a la publicación de una nueva versión de los
              presentes Términos y Condiciones, implica la aceptación del
              Usuario a lo dispuesto en la versión más actualizada de los
              mismos.
            </li>
            <li>
              <b>2.5: </b> Cada uno de los Servicios podrán estar sujetos a
              condiciones particulares y/o contratos adicionales a los Términos
              y Condiciones.
            </li>
            <li>
              <b>2.6: </b> Las condiciones particulares y/o contratos
              adicionales prevalecerán sobre los Términos y Condiciones en caso
              de diferencias de interpretación y/o conflicto.
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- PLATAFORMA ------------ -->
      <div class="row scroll-margin mb-5" id="plataforma">
        <div class="col">
          <h3>3. Plataforma</h3>
          <p>
            El Usurario se compromete a usar la Plataforma conforme a los
            Términos y Condiciones y a la legislación aplicable.
          </p>
          <ul class="list-info">
            <li>
              <b>3.1: </b> Al acceder a la Plataforma, el Usuario declara que es
              mayor de edad y que dispone de la capacidad legal necesaria para
              contratar los Servicios ofrecidos a través de la misma.
            </li>
            <li>
              <b>3.2: </b> No podrán utilizar los Servicios las personas que no
              tengan esa capacidad y los menores de edad. Los actos que éstos
              realicen en la Plataforma serán responsabilidad de sus padres o
              tutores, y por tanto se considerarán realizados por éstos en
              ejercicio de la representación legal con la que cuentan. 
            </li>
            <li>
              <b>3.3: </b> LFM se reserva la facultad de comprobar la veracidad
              de los datos facilitados por los Usuarios y no asumirá ninguna
              responsabilidad sobre personas que incumplan los presentes
              Términos y Condiciones.
            </li>
            <li>
              <b>3.4: </b> Queda expresamente prohibido cualquier uso
              fraudulento, abusivo o contrario a la buena fe por parte del
              Usuario de la Plataforma, así como de cualquiera de las
              funcionalidades que se ofrecen.
            </li>
            <li>
              <b>3.5: </b> El Usuario es el único responsable del conocimiento y
              cumplimiento de todas las leyes y reglamentos relativos al acceso
              y uso de los Servicios.
            </li>
            <li>
              <b>3.6: </b> Sin limitar lo anterior, el Usuario reconoce que son
              usos prohibidos de la Plataforma, y por ende acepta abstenerse en
              cualquier momento de realizar cualquiera de las conductas a
              continuación enlistadas:
              <ul class="list-info pt-2">
                <li>
                  <b>3.6.1: </b> Utilizar la Plataforma para cometer un delito o
                  fomentar una conducta que pueda constituir un delito o dar
                  lugar a una responsabilidad civil o violar cualquier ley
                  local, nacional o internacional, regulación o reglamento.
                </li>
                <li>
                  <b>3.6.2: </b> Cargar, publicar, enviar por correo
                  electrónico, o transmitir por cualquier medio conocido o por
                  conocerse, material ilegal, amenazante, difamatorio, acosador,
                  vulgar, obsceno, pornográfico, xenófobo y en general,
                  cualquier contenido que atente contra los derechos humanos o
                  la dignidad de la persona.
                </li>
                <li>
                  <b>3.6.2: </b> Cargar, publicar, enviar por correo
                  electrónico, o transmitir por cualquier medio conocido o por
                  conocerse, cualquier tipo de contenido cuando el Usuario no
                  tenga autorización para transmitirlo.
                </li>
                <li>
                  <b>3.6.2: </b> Cargar, publicar, enviar por correo
                  electrónico, o transmitir por cualquier medio conocido o por
                  conocerse, cualquier tipo de contenido que infrinja cualquier
                  patente, marca comercial, secreto comercial, derechos de autor
                  u otros derechos de propiedad de un tercero.
                </li>
                <li>
                  <b>3.6.2: </b> Modificar, destruir o eliminar cualquier
                  contenido o comunicación que no sea propio.
                </li>
                <li>
                  <b>3.6.2: </b> Obstaculizar de cualquier modo la capacidad de
                  otros para acceder o utilizar la Plataforma.
                </li>
                <li>
                  <b>3.6.2: </b> Interrumpir el flujo normal de comunicación o
                  de cualquier otra forma actuar de manera que afecte
                  negativamente la habilidad de otro Usuario para vincularse en
                  intercambio de información en tiempo real.
                </li>
                <li>
                  <b>3.6.2: </b> Hacerse pasar por, o pretender la existencia de
                  una relación con o para representar a un tercero, sea este,
                  empresa, asociación, institución u otro tipo de organización
                  con la cual el Usuario no tenga dicha relación o no tenga
                  autorización para ello.
                </li>
                <li>
                  <b>3.6.2: </b> Cargar, publicar, enviar por correo
                  electrónico, o transmitir por cualquier medio conocido o por
                  conocerse, publicidad no solicitada, materiales promocionales,
                  u otras formas de comunicación a cualquier Usuario,
                  incluyendo, sin limitarse a "correo basura", "spam", "cartas
                  en cadena", o "estructuras piramidales", entre otras.
                </li>
                <li>
                  <b>3.6.2: </b> Recoger o almacenar información personal u
                  otros datos sobre cualquier Usuario sin su debida autorización
                  de acuerdo con la normativa vigente.
                </li>
                <li>
                  <b>3.6.2: </b> Reproducir, duplicar, copiar, usar, distribuir,
                  vender, revender o explotar con cualquier propósito comercial
                  la Plataforma y los Servicios que ofrece LFM.
                </li>
                <li>
                  <b>3.6.2: </b> Intentar descifrar, compilar, descompilar o
                  desensamblar cualquier software comprendido en la Plataforma o
                  que de cualquier manera haga parte del mismo.
                </li>
                <li>
                  <b>3.6.2: </b> En general, incluir o colocar en la Plataforma
                  información falsa, inexacta, incompleta o engañosa.
                </li>
                <li>
                  <b>3.6.2: </b> Revelar o compartir la contraseña, que le
                  permite el acceso a un área no pública de la Plataforma o a
                  productos o servicios ofrecidos por LFM, con terceras
                  personas, o usar su contraseña para propósitos no autorizados.
                </li>
                <li>
                  <b>3.6.2: </b> Violar o intentar violar la seguridad de LFM.
                </li>
                <li>
                  <b>3.6.2: </b> Acceder a información que no esté dirigida o
                  autorizada directamente al Usuario o acceder a servidores o
                  cuentas a los cuales el Usuario no está autorizado a acceder.
                </li>
                <li>
                  <b>3.6.2: </b> Intentar probar la vulnerabilidad de un sistema
                  o red o violar las medidas de seguridad o autenticación de la
                  Plataforma.
                </li>
                <li>
                  <b>3.6.2: </b> Intentar interferir con los servicios prestados
                  a un Usuario, servidor o red, incluyendo, pero sin limitarse
                  al envío de virus a través de la Plataforma.
                </li>
                <li>
                  <b>3.6.2: </b> Cargar archivos que contengan virus, sean
                  denominados "corruptos" o contengan cualquier tipo de
                  programas o código que puedan dañar las operaciones de los
                  computadores o dispositivos electrónicos de terceros.
                </li>
                <li>
                  <b>3.6.2: </b> Anunciar u ofrecer la venta de bienes y/o
                  servicios, realizar encuestas, concursos o similares.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- PLATAFORMA ------------ -->
      <div class="row scroll-margin mb-5" id="registro">
        <div class="col">
          <h3>4. Registro</h3>
          <p>
            A fin de utilizar algunos de los Servicios de la Plataforma, el
            Usuario deberá realizar el Registro solicitado por LFM.
          </p>
          <ul class="list-info">
            <li>
              <b>4.1: </b> El Registro deberá realizarse conforme a las
              siguientes reglas de uso:
              <ul class="list-info pt-2">
                <li>
                  <b>4.1.1: </b> El Usuario se obliga a proporcionar a LFM,
                  únicamente información auténtica, actualizada, completa y
                  precisa.
                </li>
                <li>
                  <b>4.1.2: </b> El Usuario garantiza y responde, en cualquier
                  caso, por la veracidad, exactitud, vigencia y autenticidad de
                  la información suministrada.
                </li>
                <li>
                  <b>4.1.3: </b> La información proporcionada por el Usuario se
                  regirá por lo establecido en la Política de Tratamiento de
                  Datos Personales.
                </li>
                <li>
                  <b>4.1.4: </b> La información que se proporcione a LFM será
                  utilizada en general para las siguientes finalidades:
                  <ul class="list-info pt-2">
                    <li>
                      <b>4.1.4.1: </b> Establecimiento de canales de
                      comunicación con los titulares de los datos personales, a
                      fin de proveer los Servicios.
                    </li>
                    <li>
                      <b>4.1.4.2: </b> Atención y respuesta de consultas y
                      mensajes de datos enviados por los Usuarios.
                    </li>
                    <li>
                      <b>4.1.4.3: </b> Ofrecimiento de propiedades y envío de
                      contenidos, comunicaciones e información que LFM considera
                      de interés del Usuario.
                    </li>
                    <li>
                      <b>4.1.4.4: </b> Evaluación de la calidad de los
                      Servicios.
                    </li>
                    <li>
                      <b>4.1.4.5: </b> Asesoría personalizada a los Usuarios
                      para la búsqueda y adquisición de inmuebles.
                    </li>
                    <li>
                      <b>4.1.4.6: </b> Acompañamiento personalizado en la
                      búsqueda de un inmueble acorde a las especificaciones,
                      necesidades e intereses de los Usuarios.
                    </li>
                    <li>
                      <b>4.1.4.7: </b> Identificación del Usuario a fin de poder
                      compartirle información adicional de los inmuebles
                      publicados en Plataforma.
                    </li>
                    <li>
                      <b>4.1.4.8: </b> Ejecución de actividades de mercadeo y
                      publicidad relacionadas con el objeto social de LFM.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>4.1.5: </b> El Usuario puede suspender el acceso a la
                  Plataforma y/o su Registro en cualquier momento.
                </li>
              </ul>
            </li>
            <li>
              <b>4.2: </b> LFM se reserva el derecho de suspender, cancelar y/o
              impedir el uso presente o futuro de los Servicios o cualquier
              parte de los mismos, cuando se tengan motivos razonables
              suficientes para sospechar y/o se verifique que la información
              suministrada por el Usuario es falsa, inexacta, desactualizada o
              incompleta.
            </li>
            <li>
              <b>4.3: </b> De igual forma, LFM se reserva el derecho de
              compartir información adicional de los inmuebles publicados en
              Plataforma, previo Registro del mismo.
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- PLATAFORMA ------------ -->
      <div class="row scroll-margin mb-5" id="datos-personales-cookies">
        <div class="col">
          <h3>5. Datos personales y Cookies</h3>
          <p>
            La Política de Tratamiento de Datos Personales, que contiene la
            información relativa a los derechos que asisten al Usuario como
            titular de la información y el tratamiento o uso que LFM hace de la
            misma, se encuentra disponible en todo momento en la Plataforma.
          </p>
          <ul class="list-info">
            <li>
              <b>5.1: </b> De igual forma, en Plataforma se encuentra disponible
              la Política de Cookies empleada por LFM.
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- Propiedad Industrial ------------ -->
      <div class="row scroll-margin mb-5" id="propiedad-industrial">
        <div class="col">
          <h3>6. Propiedad industrial</h3>
          <p>
            El Usuario reconoce que la Plataforma, sus canales, Servicios, toda
            la tecnología subyacente que se utiliza en relación con la
            Plataforma y los Servicios y todo el Contenido, son titularidad de
            LFM o de terceros que han licenciado sus derechos o autorizado el
            uso de los mismos a LFM, por tal razón la Plataforma y el Contenido
            están protegidos por derechos de propiedad intelectual e industrial.
          </p>
          <ul class="list-info">
            <li>
              <b>6.1: </b> Mediante el uso de la Plataforma y la aceptación de
              los presentes Términos y Condiciones, LFM otorga al Usuario una
              licencia no exclusiva, limitada, temporal e intransferible que le
              autoriza a acceder a los Servicios y utilizar la Plataforma.
            </li>
            <li>
              <b>6.2: </b> Queda prohibida cualquier forma reproducción,
              distribución, modificación comunicación pública, transformación, y
              en general, cualquier acto de explotación, tenga o no fines
              comerciales, de la Plataforma y el Contenido, sin el
              consentimiento previo y expreso de LFM.
            </li>
            <li>
              <b>6.3: </b> LFM se reserva todos los derechos de propiedad
              intelectual e industrial sobre la Plataforma y el Contenido.
            </li>
            <li>
              <b>6.4: </b> En ningún caso y bajo ningún concepto el acceso al
              Sitio, aplicación móvil o la navegación o uso de la Plataforma
              constituyen o suponen una cesión de ningún tipo por parte de LFM
              de los derechos de propiedad intelectual o industrial.
            </li>
            <li>
              <b>6.5: </b> Cuando un Usuario o un tercero consideren que parte
              del Contenido de la Plataforma viola sus derechos de propiedad
              intelectual deberá comunicarlo de inmediato a LFM, al correo
              electrónico
              <a href="mailto:hola@landfindermexico.com" class="link"
                >hola@landfindermexico.com</a
              >
              especificando la siguiente información:

              <ul class="list-info pt-2">
                <li>
                  <b>6.5.1: </b> Datos personales y contacto del titular del
                  derecho de propiedad infringido.
                </li>
                <li>
                  <b>6.5.2: </b> Descripción de la violación de derechos
                  propiedad intelectual o industrial.
                </li>
                <li><b>6.5.3: </b> Enlace de localización en la Plataforma.</li>
                <li>
                  <b>6.5.4: </b> Declaración expresa de titularidad del
                  contenido considerado infringido y documentación que la
                  soporten.
                </li>
                <li>
                  <b>6.5.5: </b> Declaración de ausencia de consentimiento para
                  el uso de tal contenido en la Plataforma de LFM.
                </li>
                <li>
                  <b>6.5.6: </b> Declaración expresa de que la información
                  proporcionada es exacta y que la utilización de los contenidos
                  constituye una violación de sus derechos de propiedad
                  intelectual.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- ENLACES ------------ -->
      <div class="row scroll-margin mb-5" id="enlaces">
        <div class="col">
          <h3>7. Enlaces</h3>
          <p>
            La Plataforma puede contener vínculos o enlaces que direccionan a
            sitios web independientes o de propiedad de terceros.
          </p>

          <ul class="list-info">
            <li>
              <b>7.1: </b> Debido a que LFM no tiene control sobre estos sitios,
              no es responsable del contenido o los servicios prestados a través
              de los mismos.
            </li>
            <li>
              <b>7.2: </b> Adicionalmente, no será responsable por ningún daño o
              pérdida causada o supuestamente causada por o en conexión con el
              uso de los vínculos o enlaces de terceros.
            </li>
            <li>
              <b>7.3: </b> De igual forma, LFM no se responsabilizará de los
              productos, servicios o contenidos de los sitios.
            </li>
            <li>
              <b>7.4: </b> Ningún Usuario podrá crear vínculos a la Plataforma
              desde otros sitios, salvo autorización previa y expresa de LFM y
              que el sitio web:
              <ul class="list-info">
                <li>
                  <b>7.4.1: </b> No cree un entorno de explorador o con bordes
                  alrededor del contenido de LFM "framing”.
                </li>
                <li>
                  <b>7.4.1: </b> No cree ningún tipo de relación no autorizada
                  con LFM.
                </li>
                <li>
                  <b>7.4.1: </b> No presente información falsa acerca de los
                  productos o los Servicios de LFM.
                </li>
                <li>
                  <b>7.4.1: </b> No utilice el logotipo o ningún otro signo
                  distintivo de LFM sin autorización previa y expresa.
                </li>
                <li>
                  <b>7.4.1: </b> Contenga exclusivamente contenido adecuado para
                  todas las edades.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- RESPONSABILIDAD ------------ -->
      <div class="row scroll-margin mb-5" id="responsabilidad">
        <div class="col">
          <h3>8. Responsabilidad</h3>
          <p>
            El Usuario acepta que el acceso a la Plataforma y el acceso a los
            Servicios los realiza bajo su propio riesgo.
          </p>

          <ul class="list-info">
            <li>
              <b>8.1: </b> Ni LFM, ni sus accionistas, directores, funcionarios,
              empleados, afiliados o agentes garantizan que la Plataforma estará
              libre de interrupciones o errores.
            </li>
            <li>
              <b>8.2: </b> Tampoco hace ninguna garantía en cuanto a los
              resultados que se pueden obtener del uso de la misma o en cuanto a
              la exactitud, confiabilidad, adecuación o contenido de la
              información que aparece en la Plataforma.
            </li>
            <li>
              <b>8.3: </b> En ningún caso LFM, sus accionistas, directores,
              funcionarios, empleados o afiliados serán responsables ante el
              Usuario o cualquier tercero por daños indirectos, especiales o
              incidentales, derivados del uso o imposibilidad de acceder o
              utilizar al Sitio, incluso cuando LFM haya sido advertido de la
              posibilidad de tales daños.

              <ul class="list-info pt-2">
                <li>
                  <b>8.3.1: </b>
                  Los daños incluyen, pérdida de ingresos o ganancias
                  anticipadas, pérdida de bienes, pérdida de negocios, pérdida
                  de datos, fallo o mal funcionamiento o cualquier otro daño o
                  pérdidas que resulten de errores, omisiones, interrupciones,
                  eliminación de archivos, errores, defectos, virus, demoras en
                  la operación o transmisión o cualquier fallo de rendimiento,
                  sea o no limitado a desastres naturales, fallos en las
                  comunicaciones, robo, destrucción o acceso no autorizado a los
                  registros de LFM sus programas o servicios.
                </li>
              </ul>
            </li>
            <li>
              <b>8.4: </b> LFM, en su calidad de asesor para la búsqueda,
              análisis de inmuebles y su publicación en Plataforma, no garantiza
              que sobre la propiedad publicada pueda llegar a concretarse un
              negocio o desarrollo inmobiliario, es decir, LFM no se hace
              responsable del perfeccionamiento de la aportación y/o asociación
              de cualquier tipo y/o inversión y/o fondeo de recursos debido a
              que la misma corresponde a los Usuarios, ya sea en su carácter de
              propietario, inversionista, desarrollador, comercializador, etc.,
              quienes serán puestos en contacto mediante los Servicios ofrecidos
              por LFM.
              <ul class="list-info pt-2">
                <li>
                  <b>8.4.1: </b>
                  Conforme a lo anterior, LFM no se encuentra obligada a
                  responder frente al Usuario, ya sea propietario,
                  inversionista, desarrollador, comercializador, etc., por
                  ninguna obligación contraída entre ellos o su incumplimiento,
                  ya sea derivada o no de los Servicios ofrecidos por LFM,
                  incluyendo obligaciones o condiciones contractuales, pagos o
                  devoluciones, garantías, penas convencionales, daños,
                  perjuicios, etc.
                </li>
              </ul>
            </li>
            <li>
              <b>8.5: </b> LFM no es propietario ni desarrollador de los
              inmuebles que se ofrecen en la Plataforma, por lo tanto:
              <ul class="list-info pt-2">
                <li>
                  <b>8.5.1: </b>
                  Los datos y/o características de los inmuebles descritos en la
                  Plataforma son indicativos y no constituyen una oferta
                  comercial por parte de LFM.
                </li>
                <li>
                  <b>8.5.2: </b>
                  La información completa de los inmuebles deberá ser entregada
                  al Usuario por el propietario del mismo, a través de los
                  Servicios prestados por LFM.
                </li>
                <li>
                  <b>8.5.3: </b>
                  Cuando la información requerida por el Usuario haya sido
                  proporcionada de manera previa por el propietario, LFM podrá
                  compartirla previa autorización de éste.
                </li>
                <li>
                  <b>8.5.4: </b>
                  LFM no se responsabiliza bajo ninguna circunstancia por el
                  status legal y/o antecedentes de propiedad de los inmuebles
                  publicados en Plataforma.
                </li>
              </ul>
            </li>
            <li>
              <b>8.6: </b> Los datos y/o características de los inmuebles
              descritos en la Plataforma están sujetos a variaciones de acuerdo
              con las especificaciones de las normas ambientales y de desarrollo
              urbano aplicables, así como a lo dispuesto por su propietario,
              según corresponda.
              <ul class="list-info pt-2">
                <li>
                  <b>8.6.1: </b>
                  Asimismo, podrán estar sujetos a variaciones de acuerdo con la
                  negociación que se efectúe entre el propietario y el
                  inversionista, desarrollador y/o comercializador del inmueble.
                </li>
              </ul>
            </li>
            <li>
              <b>8.7: </b> El Usuario se obliga con LFM, sus filiales,
              afiliados, socios, asociados, accionistas, funcionarios,
              empleados, etc., a indemnizarlos y a mantenerlos a salvo de
              cualquier reclamo, demanda, acción legal, gasto, honorarios y/o
              costos que surja por la violación o desconocimiento de estos
              Términos y Condiciones por parte del Usuario.
              <ul class="list-info pt-2">
                <li>
                  <b>8.7.1: </b>
                  En caso de que LFM, sus filiales, afiliados, socios,
                  asociados, accionistas, funcionarios, empleados, etc.,
                  resulten sentenciados o afectados de algún modo como
                  consecuencia de la violación o desconocimiento de estos
                  Términos y Condiciones por parte del Usuario, éste se obliga a
                  cubrir de forma inmediata los daños y perjuicios ocasionados a
                  los primeros.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- JURISDICCION ------------ -->
      <div class="row scroll-margin mb-5" id="jurisdiccion">
        <div class="col">
          <h3>9. Jurisdicción</h3>
          <p>
            LFM controla y opera la Plataforma y todas sus actividades desde
            México y no garantiza que el contenido es apropiado o disponible
            para su uso en otros lugares.
          </p>
          <ul class="list-info">
            <li>
              <b>9.1: </b>
              Si usted tiene acceso a la Plataforma desde un lugar ubicado fuera
              del territorio de México, lo hace bajo su propio riesgo y es
              responsable del cumplimiento de las leyes aplicables en su
              jurisdicción.
            </li>
            <li>
              <b>9.2: </b>
              Abstenerse de utilizar la Plataforma si tal conducta infringe el
              ordenamiento jurídico del país donde usted reside o utiliza la
              Plataforma.
            </li>
            <li>
              <b>9.3: </b>
              Estos Términos y Condiciones Generales y el acceso y uso de la
              Plataforma están regidos por las leyes de la Ciudad de México, sin
              dar aplicación a las normas o principios sobre conflicto de leyes.
            </li>
            <li>
              <b>9.4: </b>
              La jurisdicción sobre cualquier conflicto o reclamación derivado
              de estos Términos y Condiciones, uso de la Plataforma o de los
              servicios prestados por LFM, será la de los juzgados de la ciudad
              de La Paz, B.C.S.
            </li>
            <li>
              <b>9.5: </b>
              El Usuario renuncia expresamente al fuero que pudiera
              corresponderle por razón de su domicilio presente o futuro.
            </li>
            <li>
              <b>9.6: </b>
              Todo procedimiento deberá llevarse en materia mercantil,
              aplicándose el Código de Comercio y supletoriamente el Código
              Civil Federal y Código Federal de Procedimientos Civiles.
            </li>
            <li>
              <b>9.7: </b>
              Si alguna parte de los presentes Términos y Condiciones es
              declarada nula, el resto del texto permanecerá como valido.
            </li>
          </ul>
        </div>
      </div>

      <!-- --------- LEY ANTILAVADO ------------ -->
      <div class="row scroll-margin mb-5" id="ley-antilavado">
        <div class="col">
          <h3>10. Ley Antilavado</h3>
          <p>
            El Usuario reconoce que el cumplimiento de las obligaciones en
            cuanto al uso de Plataforma, Registro y Servicios prestados por LFM,
            se encuentra sujeto al cumplimiento, por su parte, de las
            condiciones y de la entrega de documentos e información solicitada
            por LFM, así como por la Ley Federal para la Prevención e
            Identificación de Operaciones con Recursos de Procedencia Ilícita y
            demás normas o disposiciones reglamentarias afines a nivel nacional
            o internacional.
          </p>

          <ul class="list-info">
            <li>
              <b>10.1: </b>
              Cualquier incumplimiento a lo anterior por parte del Usuario,
              faculta a LFM para suspender de forma inmediata y sin
              responsabilidad alguna para LFM, el Registro, uso de Plataforma y
              prestación de Servicios al Usuario.
            </li>
            <li>
              <b>10.2: </b>
              El Usuario reconoce, acepta y garantiza, que ni él ni sus
              accionistas, socios y/o representantes:
              <ul class="list-info pt-2">
                <li>
                  <b>10.2.1: </b>
                  Se encuentran vinculados, nacional o internacionalmente, a
                  ningún tipo de investigaciones por conductas relacionadas con
                  narcotráfico, terrorismo, financiamiento al terrorismo,
                  secuestro, lavado de activos y/o cualquier otra actividad
                  vinculada a la administración de recursos relacionados con las
                  conductas descritas y/o manejar, de forma directa o indirecta
                  recursos con operaciones de procedencia ilícita.
                </li>
                <li>
                  <b>10.2.2: </b>
                  Han sido condenados por parte de las autoridades
                  jurisdiccionales y/o administrativas, nacional o
                  internacionalmente, en cualquier tipo de proceso relacionado
                  con la ejecución de las anteriores conductas o de actividades
                  conexas a tales conductas.
                </li>
                <li>
                  <b>10.2.3: </b>
                  Están o han estado incluidos en listas o bases de datos para
                  el control de lavado de activos y financiación del terrorismo
                  administradas por cualquier autoridad nacional o extranjera.
                </li>
                <li>
                  <b>10.2.4: </b>
                  La ocurrencia de cualquiera de las situaciones descritas
                  anteriormente, obligan al Usuario a informar inmediatamente a
                  LFM sobre tal situación y será el Usuario el único y exclusivo
                  responsable por cualquier consecuencia jurídica derivada. Por
                  lo tanto y para todos los efectos legales, el usuario reconoce
                  que el LFM actúa como un tercero de buena fe.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- --------- CONTACTO ------------ -->
        <div class="row scroll-margin mb-5" id="contacto-term">
          <div class="col">
            <h3>11. Contacto</h3>
            <p>
              Cualquier asunto relacionado con LFM deberá dirigirse a los
              siguientes datos de contacto: HKRE S. de R.L. de C.V. Manuel
              Encinas 1714, 1er. piso, Los Olivos, 23040, La Paz, B.C.S. (+52 1)
              612 125 1580 hola@landfindermexico.com
            </p>
          </div>
        </div>

        <!-- --------- VIGENCIA ------------ -->
        <div class="row scroll-margin mb-5" id="vigencia">
          <div class="col">
            <h3>12. Vigencia</h3>
            <p>
              Este documento constituye la versión más actualizada de los
              Términos y Condiciones (V1.22.11.09), los cuales son obligatorios
              para todos los Usuarios que visiten la Plataforma y/o usen los
              Servicios.
            </p>

            <ul class="list-info">
              <li>
                <b>12.1: </b>
                El Usuario, de forma expresa, declara que ha leído, entiende y
                acepta la totalidad de los Términos y Condiciones del uso de la
                Plataforma y Servicios, por lo que se obliga conforme a los
                mismos.
              </li>
              <li>
                <b>12.2: </b>
                LFM se reserva el derecho de modificar estos Términos y
                Condiciones o cualquier supuesto adicional que se aplique a
                algún servicio en específico.
              </li>
              <li>
                <b>12.3: </b>
                LFM publicará en el Sitio, cuando fuere posible, un aviso de las
                modificaciones de los Términos y Condiciones.
              </li>
              <li>
                <b>12.4: </b>
                Los cambios a los Términos y Condiciones no se aplicarán de
                manera retroactiva y entrarán en vigor una vez publicados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Land Finder México",
    titleTemplate: "%s | Términos y condiciones",
  },
  data() {
    return {
      content: [
        { title: "Definiciones", goto: "definiciones" },
        { title: "Generales", goto: "generales" },
        { title: "Plataforma", goto: "plataforma" },
        { title: "Registro", goto: "registro" },
        {
          title: "Datos personales y Cookies",
          goto: "datos-personales-cookies",
        },
        { title: "Propiedad industrial", goto: "propiedad-industrial" },
        { title: "Enlaces", goto: "enlaces" },
        { title: "Responsabilidad", goto: "responsabilidad" },
        { title: "Jurisdicción", goto: "jurisdiccion" },
        { title: "Ley Antilavado", goto: "ley-antilavado" },
        { title: "Contacto", goto: "contacto-term" },
        { title: "Vigencia", goto: "vigencia" },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.terminos-view {
  background-color: transparent;
  height: fit-content;
  min-height: 500px;
  width: 100%;
  color: var(--color-text) !important;

  .link {
    color: var(--color-text);
    font-weight: var(--font-bold);
    text-decoration: underline;
  }

  .scroll-margin {
    scroll-margin-top: 160px;
  }

  .content-list {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 0.5rem;
      a {
        color: var(--color-complementary-1);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .list-info {
    list-style: none;
    padding-left: 18px;
    li {
      margin-bottom: 1rem;
    }
  }
}
</style>
