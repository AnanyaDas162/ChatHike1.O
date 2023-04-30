import React, { useState, useEffect } from 'react';
import * as AgoraRTC from 'agora-rtc-sdk-ng';

const Room = () => {
  const [client, setClient] = useState(null);
  const [uid, setUid] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);

  useEffect(() => {
    const agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    agoraClient.init(process.env.REACT_APP_AGORA_APP_ID);
    setClient(agoraClient);
  }, []);

  const joinRoom = async () => {
    const uid = await client.join(process.env.REACT_APP_AGORA_CHANNEL_NAME, null, null);
    setUid(uid);

    const localStream = AgoraRTC.createStream({
      audio: true,
      video: true,
    });
    await localStream.init();
    setLocalStream(localStream);

    await client.publish(localStream);

    client.on('user-published', async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      const remoteStream = user.stream;
      setRemoteStreams([...remoteStreams, remoteStream]);
    });

    client.on('user-unpublished', (user) => {
      setRemoteStreams(remoteStreams.filter((stream) => stream.getId() !== user.stream.getId()));
    });
  };

  return (
    <div>
      <h1>Video Chat</h1>
      <button onClick={joinRoom}>Join Room</button>
      {localStream ? (
        <div>
          <h2>Local Stream</h2>
          <video ref={(node) => localStream.play(node)} />
        </div>
      ) : null}
      {remoteStreams.length > 0 ? (
        <div>
          <h2>Remote Streams</h2>
          {remoteStreams.map((stream) => (
            <video key={stream.getId()} ref={(node) => stream.play(node)} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Room;