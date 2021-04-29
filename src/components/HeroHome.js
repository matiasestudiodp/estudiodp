import React from "react";
import Helmet from "react-helmet";

function HeroHome() {
  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:py-56">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl leading-tighter  mb-4"
                data-aos="zoom-y-out"
              >
                Estudio de Profesionales SA
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Servicios de Contabilidad, Auditoría y Asesoría Fiscal
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div id="click2call">
                    <div>
                      <a
                        id="click2call_callbtn"
                        className="px-8 py-3 shadow-lg text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 rounded"
                        href="/#"
                      >
                        Llamar
                      </a>
                      <a
                        id="click2call_hupbtn"
                        className="px-8 py-3 shadow-lg text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 rounded ml-4"
                        href="/#"
                        style={{visibility: "hidden", display: "none"}}
                      >
                        Colgar
                      </a>
                    </div>
                    <div style={{visibility: "hidden", display: "none"}}>
                      <input id="click2call_user" value="web"></input>
                      <input
                        id="click2call_domain"
                        value="locutorios.voipi.com.ar"
                      ></input>
                      <input id="click2call_password" value="123456"></input>
                      <input id="click2call_number" value="1008"></input>
                      <input
                        id="click2call_host"
                        value="wss://webrtc.anura.com.ar:9084"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <script
          type="text/javascript"
          src="https://webrtc.anura.com.ar/click2call/js/jquery-2.1.1.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://webrtc.anura.com.ar/click2call/js/jquery.json-2.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://webrtc.anura.com.ar/click2call/js/jquery.cookie.js"
        ></script>
        <script
          type="text/javascript"
          src="https://webrtc.anura.com.ar/click2call/js/verto-min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://webrtc.anura.com.ar/click2call/click2call.js"
        ></script>
      </Helmet>
    </div>
  );
}

export default HeroHome;
