import UserInfo from "./user-info";

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 16,
      borderBottom: '1px solid #ccc'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: 18
      }}>RP SF API Client</h1>

      <UserInfo />
    </div>
  )
}