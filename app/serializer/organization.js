import RESTSerializer, { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ArticleSerializer extends RESTSerializer.extend(EmbeddedRecordsMixin) {}
