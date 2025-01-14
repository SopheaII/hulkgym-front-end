interface TelegramWebApp {
    initData: string;
    initDataUnsafe: Record<string, any>;
    close: () => void;
    ready: () => void;
    sendData: (data: string) => void;
    onEvent: (eventType: string, callback: (eventData: any) => void) => void;
    offEvent: (eventType: string, callback: (eventData: any) => void) => void;
    showPopup: (params: object) => void;
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  