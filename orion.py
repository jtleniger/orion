import kivy
kivy.require('1.11.1')

from kivy.app import App
from kivy.config import Config
from lib.camera import Camera

class OrionApp(App):
    def __init__(self, *args, **kwargs):
        super(OrionApp, self).__init__(*args, **kwargs)
        self.camera = Camera()
    
    def connect(self):
        self.camera.connect()
        self.root.ids['camera'].text = self.camera.name
        self.root.ids['connect'].disabled = True
        self.root.ids['disconnect'].disabled = False
    
    def disconnect(self):
        self.camera.disconnect()
        self.root.ids['camera'].text = 'Connect'
        self.root.ids['connect'].disabled = False
        self.root.ids['disconnect'].disabled = True

if __name__ == '__main__':
    Config.set('graphics', 'window_state', 'maximized')
    OrionApp().run()