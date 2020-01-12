import kivy
kivy.require('1.11.1')

from kivy.app import App
from kivy.config import Config

class OrionApp(App):
    pass

if __name__ == '__main__':
    Config.set('graphics', 'window_state', 'maximized')
    OrionApp().run()