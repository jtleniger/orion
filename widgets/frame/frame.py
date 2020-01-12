from kivy.uix.gridlayout import GridLayout
from kivy.lang.builder import Builder

class FrameWidget(GridLayout):
    Builder.load_file('widgets/frame/frame.kv')

    DESCRIPTION = ("Plate solve an image here to ensure your framing is as expected.")

    def __init__(self, *args, **kwargs):
        super(FrameWidget, self).__init__(*args, **kwargs)