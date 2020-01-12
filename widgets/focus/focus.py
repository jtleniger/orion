from kivy.uix.gridlayout import GridLayout
from kivy.lang.builder import Builder

class FocusWidget(GridLayout):
    Builder.load_file('widgets/focus/focus.kv')

    DESCRIPTION = ("The half flux diameter defines the diameter of a circle around the bright center in which half of the star flux or energy is contained."
        "The other half of the flux is outside this circle. [b]Minimize this value to ensure good focus.[/b]")

    def __init__(self, *args, **kwargs):
        super(FocusWidget, self).__init__(*args, **kwargs)