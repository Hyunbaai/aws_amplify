export const wheelCommands = {
    stop: [{ label: 'Stop', command: 'Stop', value: 0.0 }],
    forward: [
        { label: 'Forward 1m', command: 'MoveDelta', value: 1.0 },
        { label: 'Forward 2m', command: 'MoveDelta', value: 2.0 },
    ],
    backward: [
        { label: 'Backward 1m', command: 'MoveDelta', value: -1.0 },
        { label: 'Backward 2m', command: 'MoveDelta', value: -2.0 },
    ],
    left: [
        { label: 'Left 90°', command: 'TurnDelta', value: 1.5708 },
    ],
    right: [
        { label: 'Right 90°', command: 'TurnDelta', value: -1.5708 },
    ],
};