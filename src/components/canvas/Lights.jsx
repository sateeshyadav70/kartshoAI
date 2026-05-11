export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 7]} intensity={1.1} color="#e0ffff" />
      <pointLight position={[-4, 1, 4]} intensity={2.5} color="#00ffff" />
      <pointLight position={[4, -1, 4]} intensity={1.8} color="#34d399" />
      <spotLight position={[0, 7, 6]} angle={0.32} penumbra={1} intensity={1.8} color="#ffffff" />
    </>
  );
}
