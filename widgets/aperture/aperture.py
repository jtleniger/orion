from kivy.uix.spinner import Spinner
from kivy.lang.builder import Builder

class ApertureWidget(Spinner):
    Builder.load_file('widgets/aperture/aperture.kv')

    def __init__(self, *args, **kwargs):
        super(ApertureWidget, self).__init__(*args, **kwargs)