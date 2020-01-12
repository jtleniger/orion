from kivy.uix.gridlayout import GridLayout
from kivy.lang.builder import Builder

class SequenceWidget(GridLayout):
    Builder.load_file('widgets/sequence/sequence.kv')

    def __init__(self, *args, **kwargs):
        super(SequenceWidget, self).__init__(*args, **kwargs)