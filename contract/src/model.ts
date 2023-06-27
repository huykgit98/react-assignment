export class Post {
  id: string;
  account_id: string;
  topic: Topic;
  title: string;
  body: string;
  post_type: PostType;
  time: string;

  constructor(
    id: string,
    account_id: string,
    topic: Topic,
    title: string,
    body: string,
    post_type: PostType,
    time: string
  ) {
    this.id = id;
    this.account_id = account_id;
    this.topic = topic;
    this.title = title;
    this.body = body;
    this.post_type = post_type;
    this.time = time;
  }
}

export class Topic {
  id: string;
  admin: string;
  name: string;
  created_time: string;
  description: string;

  constructor(
    id: string,
    admin: string,
    name: string,
    created_time: string,
    description: string
  ) {
    this.id = id;
    this.admin = admin;
    this.name = name;
    this.created_time = created_time;
    this.description = description;
  }
}

export class PostType {
  type: string;
  url: string;

  constructor(type: string, url: string) {
    this.type = type;
    this.url = url;
  }
}
