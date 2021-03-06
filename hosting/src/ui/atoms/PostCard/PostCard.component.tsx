import React from 'react'
import CheckMark from 'react-ionicons/lib/MdCheckmark'
import CheckMarks from 'react-ionicons/lib/MdDoneAll'
import Reply from 'react-ionicons/lib/IosRedo'
import ChatBubbles from 'react-ionicons/lib/MdChatbubbles'
import theme from 'ui/assets/theme'
import Avatar from 'ui/atoms/Avatar'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import formatTimestamp from 'ui/helpers/formatTimestamp'
import * as S from './PostCard.style'

const PostCard = ({ post, hideButtons = false }) => {
  const {
    author: { displayName = '', photoURL = '' },
    communityID,
    pid,
    replies = '',
    server = false,
    text = '',
    updatedAt = { seconds: 0 }
  } = post

  return (
    <S.PostCard role="article" data-focusable="true">
      <S.Card>
        <Avatar src={photoURL} alt="display profile" style={{ height: 35, width: 35, margin: `8px 0 0 -20px` }} />
        <S.LeftCard></S.LeftCard>
        <S.RightCard>
          <S.Col>
            <S.Col>
              <S.Row>
                <S.Col>
                  <Text size="S" text={displayName} bold unique />
                </S.Col>
                <S.Col style={{ flex: 0, minWidth: 115, alignItems: 'flex-end' }}>
                  <Text size="XS" text={formatTimestamp(updatedAt)} unique />
                </S.Col>
              </S.Row>
              <S.Row>
                {/* <Link type="internal" href={`/${communityID}/${pid}`}> */}
                  <table style={{ tableLayout: 'fixed', width: '100%', wordWrap: 'break-word' }}>
                    <tbody>
                      <tr>
                        <td>
                          <Text
                            size="S"
                            text={text}
                            style={{ color: '#261643', margin: '0px 0 7px 0', fontWeight: 400 }}
                            unique
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                {/* </Link> */}
              </S.Row>
            </S.Col>
            {!hideButtons && (
              <S.Row style={{ marginTop: 0 }}>
                <S.Col style={{ flex: 0 }}>
                  <S.CommentButton>
                    {/* <Link type="button" onClick={() => alert('Please feel free to contact me at charlie.hay@outlook.com')}> */}
                      <ChatBubbles fontSize={`${theme.FONT_S}px`} color={theme.BRAND_COLOR} />
                      <Text
                        size="XS"
                        text={`${replies} Replies`}
                        style={{ marginLeft: 3, color: theme.BRAND_COLOR, fontWeight: 600 }}
                        unique
                      />
                    {/* </Link> */}
                  </S.CommentButton>
                </S.Col>
                <S.Col style={{ flex: 0 }}>
                  <S.CommentButton>
                    {/* <Link type="button" onClick={() => alert('Please feel free to contact me at charlie.hay@outlook.com')}> */}
                      <Reply fontSize={`${theme.FONT_M}px`} color={theme.BRAND_COLOR} />
                      <Text
                        size="XS"
                        text="Write Reply"
                        style={{ marginLeft: 3, color: theme.BRAND_COLOR, fontWeight: 600 }}
                        unique
                      />
                    {/* </Link> */}
                  </S.CommentButton>
                </S.Col>
                <S.Col>
                  <S.ServerCheck>
                    {server ? (
                      <CheckMarks fontSize="12px" color={theme.BRAND_COLOR} />
                    ) : (
                      <CheckMark fontSize="12px" color={theme.BRAND_COLOR} />
                    )}
                  </S.ServerCheck>
                </S.Col>
              </S.Row>
            )}
          </S.Col>
        </S.RightCard>
      </S.Card>
    </S.PostCard>
  )
}

export default PostCard
