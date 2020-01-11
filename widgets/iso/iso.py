from kivy.uix.label import Label
from kivy.lang.builder import Builder

class IsoWidget(Label):
    Builder.load_file('widgets/iso/iso.kv')