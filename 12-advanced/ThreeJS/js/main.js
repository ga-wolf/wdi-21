let app = {};
app.step = 0;

var randomHex = function() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

app.createParticles = function() {
  app.geometry = new THREE.Geometry();
  for (let i = 0; i < 5000; i += 1) {
    var vertex = new THREE.Vector3();
    vertex.x = THREE.Math.randFloatSpread(1000);
    vertex.y = THREE.Math.randFloatSpread(1000);
    vertex.z = THREE.Math.randFloatSpread(1000);
    app.geometry.vertices.push(vertex);
  }

  app.points = [];
  for (let j = 1; j <= 5; j += 1) {
    var randomDegree = Math.floor(THREE.Math.randFloat(1, 360));
    var hsl = `hsl(${randomDegree}, 100%, 50%)`;
    var size = THREE.Math.randFloat(5, 15);

    var loader = new THREE.TextureLoader();
    var src = Math.random() < 0.5 ? "./assets/coop.png" : "./assets/coop2.png";
    loader.load(src, function(texture) {
      var material = new THREE.PointsMaterial({
        size: size,
        map: texture,
        transparent: true,
        alphaTest: 0.5
        // color: hsl
      });
      var points = new THREE.Points(app.geometry, material);
      points.hue = randomDegree;
      points.rotation.x = THREE.Math.randFloat(1, 6);
      points.rotation.y = THREE.Math.randFloat(1, 6);
      points.rotation.z = THREE.Math.randFloat(1, 6);
      app.scene.add(points);
      app.points.push(points);
    });
  }
};

// prettier-ignore
app.controller = new function() {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
};

app.init = function() {
  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(
    45,
    app.width / app.height,
    0.1,
    1000
  );

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;

  app.camera.lookAt(app.scene.position);

  app.renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  app.renderer.setPixelRatio(window.devicePixelRatio || 1);
  app.renderer.setSize(app.width, app.height);
  app.renderer.setClearColor(0xeceff1);
  document.querySelector("#output").appendChild(app.renderer.domElement);

  app.axes = new THREE.AxisHelper(20);
  app.scene.add(app.axes);

  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xcfd8dc,
    side: THREE.DoubleSide
  });
  app.plane = new THREE.Mesh(planeGeometry, planeMaterial);
  app.plane.rotation.x = -0.5 * Math.PI;

  app.plane.position.x = 15;
  app.plane.position.y = 0;
  app.plane.position.z = 0;
  app.plane.receiveShadow = true;
  app.scene.add(app.plane);

  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff8f00
  });
  app.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  app.cube.position.x = -4;
  app.cube.position.y = 3;
  app.cube.castShadow = true;
  app.scene.add(app.cube);

  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039be5
  });
  app.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  app.sphere.position.x = 20;
  app.sphere.position.y = 4;
  app.sphere.position.z = 2;
  app.sphere.castShadow = true;
  app.scene.add(app.sphere);

  app.pointLight = new THREE.PointLight(0xffffff);
  app.pointLight.position.set(-40, 60, 20);
  app.pointLight.castShadow = true;
  app.pointLight.shadow.mapSize.width = 2048;
  app.pointLight.shadow.mapSize.height = 2048;
  app.scene.add(app.pointLight);

  app.gui = new dat.GUI();
  app.gui.add(app.controller, "rotationSpeed", 0, 0.5);
  app.gui.add(app.controller, "bouncingSpeed", 0, 0.5);

  app.renderer.shadowMap.enabled = true;

  app.controls = new THREE.OrbitControls(app.camera, app.renderer.domElement);

  app.createParticles();
  app.renderer.render(app.scene, app.camera);
};

app.initStats = function() {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.top = 0;
  stats.domElement.style.left = 0;
  document.querySelector("#stats").appendChild(stats.domElement);
  return stats;
};

app.animate = function() {
  app.controls.update();
  app.stats.update();

  app.step += app.controller.bouncingSpeed;

  for (var i = 0; i < app.points.length; i += 1) {
    var points = app.points[i];
    var hue = (points.hue += 1.5);
    // points.material.color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
    points.rotation.x += 0.002;
    points.rotation.y += 0.002;
    points.rotation.z += 0.002;
  }

  app.sphere.position.x = 20 + 10 * Math.cos(app.step);
  app.sphere.position.y = 2 + 10 * Math.abs(Math.sin(app.step));

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.renderer.render(app.scene, app.camera);

  requestAnimationFrame(app.animate);
};

app.onResize = function() {
  app.camera.aspect = window.innerWidth / window.innerHeight;
  app.camera.updateProjectionMatrix();
  app.renderer.setSize(window.innerWidth, window.innerHeight);
};

app.init();
app.stats = app.initStats();
app.animate();
window.addEventListener("resize", app.onResize);
