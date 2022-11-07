import moment from 'moment';
import 'moment/locale/ru'
moment.locale('ru');

export default function WrapHOC(Component) {
  return (props) => {
    const timePretty = moment(new Date(props.date)).fromNow();
    return <Component date={timePretty} />
  }
}
