/**
 * Interface for a generic persistence driver to perform CRUD operations
 * on a data store (e.g., database, file system, etc.)
 * @Author Karami
 *
 * @remarks
 * This interface is meant to be used exclusively with {@link Task}, for the purposes
 * of creating a TO DO application as this is what this project is about, however
 * it can be adapted for other uses with minimal changes.
 */
export interface PersistenceDriver {
    /**
     * Create a new record in the specified table.
     * @param table - The name of the table/collection to insert the record into.
     * @param data - The data object to be inserted.
     * @returns **Promise** resolving to the created record, or **Null** if creation failed.
     */
    create<T>(
        table: string,
        data: T
    ): Promise<T>;

    /**
     * Read a record from the specified table based on the query.
     * @param table - The name of the table/collection to read the record from.
     * @param query - An object representing the query criteria.
     * @returns **Promise** resolving to the found record, or **Null** if no record matches the query.
     */
    read<T>(
        table: string,
        query: Record<string, unknown>
    ): Promise<T | null>;

    /**
     * Update a record in the specified table based on the query.
     * @param table - The name of the table/collection to update the record in.
     * @param query - An object representing the query criteria to find the record.
     * @param data - A partial object containing the fields to be updated.
     * @returns **Promise** resolving to the updated record, or **Null** if no record matches the query.
     */
    update<T>(
        table: string,
        query: Record<string, unknown>,
        data: Partial<T>
    ): Promise<T | null>;

    /**
     * Delete a record from the specified table based on the query.
     * @param table - The name of the table/collection to delete the record from.
     * @param query - An object representing the query criteria to find the record.
     * @returns **Promise** resolving to **True** if deletion was successful, or **False** otherwise.
     */
    delete(
        table: string,
        query: Record<string, unknown>
    ): Promise<boolean>;
}