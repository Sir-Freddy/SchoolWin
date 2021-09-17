export interface DatabaseForumInterface {
  msg: string;
  msgCreated: number;
  username: string;
  subjectCreated: number;
  subject: string;
  _id: string;
}

export interface ForumInterface {
  msg: string;
  username: string;
  msgCreated: number;
  subjectCreated: number;
  subject: string;
  _id: string;
}
