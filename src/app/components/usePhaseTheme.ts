import { usePhaseContext } from './PhaseEffectProvider';
import { getPhaseTheme } from './PhaseEffectProvider';

export function usePhaseTheme() {
  const { phase } = usePhaseContext();
  const theme = getPhaseTheme(phase);
  return { phase, theme };
} 