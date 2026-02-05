import InvitationSvg from "./components/InvitationSvg";

export default function App() {
  return (
    <>
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 9999, background: "#fff" }}>
        App 렌더링 OK
      </div>
      <InvitationSvg />
    </>
  );
}
