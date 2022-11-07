import WrapHOC from './WrapHOC';
import DateTime from './DateTime';

const DateTimePretty = WrapHOC(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}
