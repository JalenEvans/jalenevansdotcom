import AstroLogo from '../assets/Logos/astro.svg?raw'
import FastAPI from '../assets/Logos/fastapi.svg?raw'
import FlutterLogo from '../assets/Logos/flutter.svg?raw'
import FirebaseLogo from '../assets/Logos/firebase.svg?raw'
import JavaLogo from '../assets/Logos/java.svg?raw'
import JupyterLogo from '../assets/Logos/jupyter.svg?raw'
import PostgreSQLLogo from '../assets/Logos/postgresql.svg?raw'
import PytorchLogo from '../assets/Logos/pytorch.svg?raw'
import ReactLogo from '../assets/Logos/react.svg?raw'

export type LogoData = {
  title: string
  rawPath: string
  hoverColor: string
}

const ASTRO_DATA: LogoData = {
  title: 'Astro',
  rawPath: AstroLogo,
  hoverColor: '#BC52EE',
}

const FASTAPI_DATA: LogoData = {
  title: 'FastAPI',
  rawPath: FastAPI,
  hoverColor: '#009688',
}

const FLUTTER_DATA: LogoData = {
  title: 'Flutter',
  rawPath: FlutterLogo,
  hoverColor: '#02569B',
}

const FIREBASE_DATA: LogoData = {
  title: 'Firebase',
  rawPath: FirebaseLogo,
  hoverColor: '#DD2C00',
}

const JAVA_DATA: LogoData = {
  title: 'Java',
  rawPath: JavaLogo,
  hoverColor: '#EA2D2E',
}

const JUPYTER_DATA: LogoData = {
  title: 'Jupyter',
  rawPath: JupyterLogo,
  hoverColor: '#F37626',
}

const POSTGRESQL_DATA: LogoData = {
  title: 'PostgreSQL',
  rawPath: PostgreSQLLogo,
  hoverColor: '#4169E1',
}

const PYTORCH_DATA: LogoData = {
  title: 'PyTorch',
  rawPath: PytorchLogo,
  hoverColor: '#EE4C2C',
}

const REACT_DATA: LogoData = {
  title: 'React',
  rawPath: ReactLogo,
  hoverColor: '#61DAFB',
}

export {
  ASTRO_DATA,
  FASTAPI_DATA,
  FLUTTER_DATA,
  FIREBASE_DATA,
  JAVA_DATA,
  JUPYTER_DATA,
  POSTGRESQL_DATA,
  PYTORCH_DATA,
  REACT_DATA,
}
