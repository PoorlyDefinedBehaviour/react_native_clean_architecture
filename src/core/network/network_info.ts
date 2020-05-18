interface INetworkInfo {
  isConnected: () => Promise<boolean>
}

export default INetworkInfo
