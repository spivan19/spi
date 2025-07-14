async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 KnightBot MD*

*📂 GitHub Repository:*
https://github.com/spivan19/spi

*📢 Official Channel:*
https://youtube.com/@lil_while

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '1203',
                    newsletterName: 'ƙαɱι-ɱԃ',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
