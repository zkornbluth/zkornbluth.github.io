export default function BottomButton({ displayName, clickButton, isActive }) {
  return (
    <button 
      className={`bottom-button ${isActive ? 'active' : ''}`} 
      onClick={() => clickButton(displayName)}
    >
      {displayName}
    </button>
  )
}