export async function init(setupScene = () => {}, onFrame = () => {}) {
  // Other setup code...
  if (navigator.xr && navigator.xr.isSessionSupported) {
    navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
      if (supported && navigator.xr.requestSession) {
        navigator.xr.requestSession('immersive-vr', {
          optionalFeatures: ['REQUIRED_FEATURES'],
        })
        .then((session) => {renderer.xr.setSession(session);});
      }
    });
  }
}