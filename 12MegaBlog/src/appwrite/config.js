import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class DataService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setEndpoint(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    publicationDate,
    featuredImage,
    status,
    userId,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          publicationDate,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite update error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite delete error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite get error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite getPosts error", error);
      return false;
    }
  }

  //   File Upload Service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite Uploadfile error", error);
      return false;
    }
  }

  //   File Delete Service
  async deleteFile(fileId) {
    try {
        await this.bucket.deleteFile(
            conf.appWriteBucketId,
            fileId,
        )
        return true
    } catch (error) {
        console.log("appwrite Delete File error", error)
        return false
        
    }
  }

  //   File Delete Service
  getFilePreview(fileId) {
    try {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId,
        )
    } catch (error) {
        console.log("appwrite Delete File error", error)
        return false
        
    }
  }
}

const dataService = new DataService();

export default dataService;
