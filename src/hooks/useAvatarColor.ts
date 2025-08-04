
import { useAvatarBackgrounds } from './useAvatarBackgrounds'

export const useAvatarColor = () => {
  const { defaultBackground } = useAvatarBackgrounds()

  const getAvatarColor = (name: string): string => {
    // Se c'è uno sfondo predefinito impostato, usalo
    if (defaultBackground) {
      if (defaultBackground.type === 'color') {
        return defaultBackground.value
      } else if (defaultBackground.type === 'image') {
        // Per le immagini, ritorniamo un colore di fallback con buon contrasto
        return 'hsl(214, 100%, 50%)'
      }
    }

    // Fallback: genera un colore basato sul nome con buon contrasto per testo bianco
    const colors = [
      'hsl(214, 100%, 50%)', // Blu primario
      'hsl(0, 84%, 60%)',    // Rosso accent
      'hsl(210, 100%, 60%)', // Blu chiaro
      'hsl(330, 80%, 60%)',  // Rosa/magenta
      'hsl(120, 70%, 50%)',  // Verde
      'hsl(30, 90%, 60%)',   // Arancione
      'hsl(270, 70%, 60%)',  // Viola
      'hsl(195, 85%, 55%)',  // Ciano
      'hsl(45, 90%, 55%)',   // Giallo scuro
      'hsl(15, 85%, 60%)',   // Rosso-arancione
      'hsl(285, 75%, 60%)',  // Viola-magenta
      'hsl(160, 70%, 50%)'   // Verde acqua
    ]
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  const getAvatarBackground = (name: string, hasAvatar: boolean = false): { 
    backgroundColor?: string; 
    backgroundImage?: string;
  } => {
    console.log(`🔍 Avatar debug for ${name}: hasAvatar=${hasAvatar}, defaultBackground=`, defaultBackground);
    
    // Se il giocatore ha un avatar caricato, usa il sistema personalizzato
    if (hasAvatar && defaultBackground) {
      if (defaultBackground.type === 'color') {
        console.log(`🎨 Using custom color ${defaultBackground.value} for ${name}`);
        return { backgroundColor: defaultBackground.value }
      } else if (defaultBackground.type === 'image') {
        console.log(`🖼️ Using custom image for ${name}`);
        return { 
          backgroundImage: `url(${defaultBackground.value})`
        }
      }
    }

    // Se non ha avatar O non ci sono custom background, usa il fallback
    if (!hasAvatar) {
      console.log(`⚫ Using #0D1B2A for ${name} (no avatar)`);
      return { backgroundColor: '#0D1B2A' }
    }

    // Fallback: usa il colore generato
    const fallbackColor = getAvatarColor(name);
    console.log(`🔄 Using fallback color ${fallbackColor} for ${name}`);
    return { backgroundColor: fallbackColor }
  }

  const getAvatarFallbackStyle = (name: string, hasAvatar: boolean = false): React.CSSProperties => {
    // Il background viene sempre gestito dal componente Avatar, qui solo il colore del testo
    return { color: 'white' }
  }

  return {
    getAvatarColor,
    getAvatarBackground,
    getAvatarFallbackStyle,
    defaultBackground
  }
}
