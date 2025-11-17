import { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const options = {
      whatsapp: "8801234567890",
      position: "right",
    };

    const proto = document.location.protocol;
    const host = "getbutton.io";
    const url = proto + "//static." + host;

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = () => {
      window.WhWidgetSendButton.init(host, proto, options);
    };

    document.body.appendChild(s);
  }, []);

  return null;
};

export default WhatsAppWidget;
