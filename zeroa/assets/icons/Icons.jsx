import { View } from "react-native";
import ICAdd from "./svgs/ICAdd";
import ICAddLocation from "./svgs/ICAddLocation";
import ICBack from "./svgs/ICBack";
import ICBackSpace from "./svgs/ICBackspace";
import ICCheck from "./svgs/ICCheck";
import ICClose from "./svgs/ICClose";
import ICCopy from "./svgs/ICCopy";
import ICDown from "./svgs/ICDown";
import ICFilterMenu from "./svgs/ICFilterMenu";
import ICIdea from "./svgs/ICIdea";
import ICLocation from "./svgs/ICLocation";
import ICMoney from "./svgs/ICMoney";
import ICPhone from "./svgs/ICPhone";
import ICPower from "./svgs/ICPower";
import ICSavedLocal from "./svgs/ICSavedLocal";
import ICShare from "./svgs/ICShare";
import ICTap from "./svgs/ICTap";
import ICView from "./svgs/ICView";
import ICIconError from "./svgs/ICIconError";

const Svgs = {
  ic_add: (color) => <ICAdd color={color} />,
  ic_add_location: (color) => <ICAddLocation color={color} />,
  ic_back: (color) => <ICBack color={color} />,
  ic_backspace: (color) => <ICBackSpace color={color} />,
  ic_check: (color) => <ICCheck color={color} />,
  ic_close: (color) => <ICClose color={color} />,
  ic_copy: (color) => <ICCopy color={color} />,
  ic_down: (color) => <ICDown color={color} />,
  ic_filter_menu: (color) => <ICFilterMenu color={color} />,
  ic_idea: (color) => <ICIdea color={color} />,
  ic_location: (color) => <ICLocation color={color} />,
  ic_money: (color) => <ICMoney color={color} />,
  ic_phone: (color) => <ICPhone color={color} />,
  ic_power: (color) => <ICPower color={color} />,
  ic_saved_local: (color) => <ICSavedLocal color={color} />,
  ic_share: (color) => <ICShare color={color} />,
  ic_tap: (color) => <ICTap color={color} />,
  ic_view: (color) => <ICView color={color} />,
  ic_icon_error: (color) => <ICIconError color={color} />,
};

export default function Icons({ name, color, style }) {
  return (
    <View
      style={[
        style ? style : null,
        {
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {Svgs[name](color)}
    </View>
  );
}
