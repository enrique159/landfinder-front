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
            <li v-for="(item, index) in content" ::key="title">
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
                  <b>4.1.2: </b> El Usuario garantiza y responde, en cualquier caso, por la veracidad, exactitud, vigencia y autenticidad de la información suministrada. 
                </li>
                <li>
                  <b>4.1.3: </b> La información proporcionada por el Usuario se regirá por lo establecido en la Política de Tratamiento de Datos Personales.  
                </li>
                <li>
                  <b>4.1.4: </b> La información que se proporcione a LFM será utilizada en general para las siguientes finalidades:  
                  <ul class="list-info pt-2">
                    <li>
                      <b>4.1.4.1: </b> Establecimiento de canales de comunicación con los titulares de los datos personales, a fin de proveer los Servicios. 
                    </li>
                    <li>
                      <b>4.1.4.2: </b> Atención y respuesta de consultas y mensajes de datos enviados por los Usuarios. 
                    </li>
                    <li>
                      <b>4.1.4.3: </b> Ofrecimiento de propiedades y envío de contenidos, comunicaciones e información que LFM considera de interés del Usuario. 
                    </li>
                    <li>
                      <b>4.1.4.4: </b> Evaluación de la calidad de los Servicios. 
                    </li>
                    <li>
                      <b>4.1.4.5: </b> Asesoría personalizada a los Usuarios para la búsqueda y adquisición de inmuebles. 
                    </li>
                    <li>
                      <b>4.1.4.6: </b> Acompañamiento personalizado en la búsqueda de un inmueble acorde a las especificaciones, necesidades e intereses de los Usuarios.
                    </li>
                    <li>
                      <b>4.1.4.7: </b> Identificación del Usuario a fin de poder compartirle información adicional de los inmuebles publicados en Plataforma.  
                    </li>
                    <li>
                      <b>4.1.4.8: </b> Ejecución de actividades de mercadeo y publicidad relacionadas con el objeto social de LFM. 
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
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
        { title: "Ley Antilavado", goto: "ley-antilabado" },
        { title: "Contacto", goto: "contacto" },
        { title: "Vigencia", goto: "vigencia" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.terminos-view {
  background-color: var(--color-white);
  height: fit-content;
  min-height: 500px;
  width: 100%;
  color: var(--color-black) !important;

  .link {
    color: var(--color-black);
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
        color: var(--color-complementary-2);
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
