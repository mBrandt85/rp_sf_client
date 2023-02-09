import './spinner.css'

export default function Spinner() {
  return <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: 16
  }}>
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  </div>
}