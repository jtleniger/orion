from kivy.uix.textinput import TextInput
from kivy.lang.builder import Builder

class ShutterWidget(TextInput):
    Builder.load_file('widgets/shutter/shutter.kv')

    def __init__(self, *args, **kwargs):
        super(ShutterWidget, self).__init__(*args, **kwargs)