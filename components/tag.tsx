const TagColor: Record<string, string> = {
  effect: '#EDE9FE',
  'high-definition': '#FECDD3',
  lora: '#F5D0FE',
  motion: '#FED7AA',
  transfermation: '#A7F3D0',
  'ultra-fast': '#BFDBFE',
  hot: '#EDE9FE',
  'new': '#FECDD3',
  'text-to-image': '#F5D0FE',
  'text-to-video': '#FED7AA',
  'image-to-image': '#A7F3D0',
  'image-to-video': '#BFDBFE',
  'training': '#F5D0FE',
}

const BackgroundColor: Record<string, string> = {
  new: '#F6FFED',
  hot: '#FFF7E6',
  default: '#F0F9FF',
}

const TextColor: Record<string, string> = {
  new: '#52C41A',
  hot: '#FA8C16',
  default: '#0EA5E9',
}

export const Tag = ({ text }: { text: string }) => {
  const backgroundColor = BackgroundColor[text] || BackgroundColor.default;
  const textColor = TextColor[text] || TextColor.default;
  
  return (
    <div className={`px-2 py-[2px] border rounded text-xs dark:bg-[#282A2F]`} style={{ 
      borderColor: textColor, 
      color: textColor, 
      backgroundColor: backgroundColor
    }}>
      {text.toUpperCase()}
    </div>
  )
}

const StatusColor: Record<string, string> = {
  idle: '#52C41A',
  created: '#1D4ED8',
  processing: '#1D4ED8',
  completed: '#159842',
  failed: '#FF0000',
}

export const StatusTag = ({ status, text }: { status: 'idle' | 'processing' | 'created' | 'completed' | 'failed', text: string }) => {
  return (
    <div className={`flex items-center justify-center gap-[6px]`}>
      <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: StatusColor[status] }} />
      <p className={`text-xs`} style={{ color: StatusColor[status] }}>{text}</p>
    </div>
  )
}