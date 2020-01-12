from kivy.uix.spinner import Spinner
from kivy.lang.builder import Builder

class IsoWidget(Spinner):
    Builder.load_file('widgets/iso/iso.kv')

    def __init__(self, *args, **kwargs):
        super(IsoWidget, self).__init__(*args, **kwargs)