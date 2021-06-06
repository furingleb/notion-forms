import { NotionEntities } from "./notionEntities.enum"

export interface Createdtime {}
export interface Name {
  id: string
  type: string
  title: Createdtime
}

export interface Multiselect {
  options: any[]
}
export interface Tags {
  id: string
  type: string
  multi_select: Multiselect
}

export interface Created {
  id: string
  type: string
  created_time: Createdtime
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Text {
  content: string
  link?: any
}

export interface DatabaseTitle {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href?: string
}

export interface DatabaseProperties {
  Created: Created
  Tags: Tags
  Name: Name
}

export interface IDatabase {
  object: NotionEntities
  id: string
  created_time: Date
  last_edited_time: Date
  title: DatabaseTitle[]
  properties: DatabaseProperties
}
