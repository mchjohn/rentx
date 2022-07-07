import CarSvg from '../assets/car.svg';
import SpeedSvg from '../assets/speed.svg';
import ForceSvg from '../assets/force.svg';
import PeopleSvg from '../assets/people.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import GasolineSvg from '../assets/gasoline.svg';
import ExchangeSvg from '../assets/exchange.svg';
import AccelerationSvg from '../assets/acceleration.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'seats':
      return PeopleSvg;
    case 'electric_motor':
      return EnergySvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'exchange':
      return ExchangeSvg;
    case 'acceleration':
      return AccelerationSvg;
    default:
      return CarSvg;
  }
}